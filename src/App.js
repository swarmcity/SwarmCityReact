import React, { Component } from "react";
import "./swarm-city.css";
import Web3 from "web3";
import CID from "cids";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IpfsApi from "ipfs-api";
import "./contracts/contractsData";
import "./contracts/contractAbis";
import Moment from "moment";
import Welcome from "./pages/welcome/welcome";
import ItemDetailRouter from "./pages/item-detail/itemDetailRouter";
import HashtagListRouter from "./pages/hashtag-list/hashtagListRouter";
import HashtagRouter from "./pages/hashtag/hashtagRouter";
import CreateAccount from "./pages/create-account/CreateAccountRoot";
import styles from "./styles.module.css";

var Buffer = require("safe-buffer").Buffer;
const ipfs = IpfsApi("ipfs.swarm.city", "443", { protocol: "https" });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      res: "",
      hashtagName: "",
      hashtagMaintainer: "",
      hashtagAvatar: ""
    };
  }

  componentWillMount() {
    window.renderComplete = false;
    console.log("component mounted");
    //const ipfs = IpfsApi("ipfs.swarm.city", "443", { protocol: "https" });
    console.log("Redux-sagas is using ipfs at https://ipfs.swarm.city:443");
    //ipfs.cat()
    let web3DN = new Web3("wss://proxy.swarm.city/kovan");
    window.web3 = web3DN;
    this.setState({
      hashtagName: "unknown",
      seekerName: "unknown",
      hashtagAvatar: "unknown"
    });
    web3DN.eth
      .getBlockNumber()
      .then(block => {
        this.setState({ res: block });
      })
      .catch(e => {
        this.setState({ res: e.message });
      });
  }

  componentDidMount() {
    //var $this = $(ReactDOM.findDOMNode(this));
    // set el height and width etc.
    console.log("component m ounted for real");
    //this.getHashtag().bind(this)
    try {
      // getHashtagAsync().then(res => {
      //   this.setState({ hashtagName: res.hashtagName });
      //   this.setState({ seekerName: res.seeker });
      //   this.setState({ hashtagAvatarData: res.seekerAvatar });
      //   this.setState({ description: res.description });
      //   this.setState({ itemValue: res.itemValue });
      //   this.setState({ seekerRep: res.seekerRep });
      //   var readibletime = Moment(res.timestamp*1000).format('DD MMM YYYY - HH:mm');
      //   this.setState({ timestamp: readibletime });
      //   window.renderComplete = true;
      // })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={styles.SwarmCity}>
        <Route exact path="/" component={Welcome} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/hashtag-list" component={HashtagListRouter} />
        <Route path="/hashtag/:hashtagAddress" component={HashtagRouter} />
        <Route
          path="/item-detail/:hashtag/:item"
          component={ItemDetailRouter}
        />
      </div>
    );
  }
}

function Child({ match }) {
  window.hashtag = match.params.hashtag;
  window.itemhash = match.params.item;
  return true;
}

function handleChange(e) {
  console.log("location changed", e);
}

function getHashtag() {
  try {
    getHashtagAsync().then(res => {
      this.setState({ hashtagName: res.hashtagName });
      this.setState({ hashtagMaintainer: res.seeker });
      this.setState({ hashtagAvatarData: res.seekerAvatar });
      this.setState({ description: res.description });
      this.setState({ itemValue: res.itemValue });
      this.setState({ seekerRep: res.seekerRep });
      var readibletime = Moment(res.timestamp * 1000).format(
        "DD MMM YYYY - HH:mm"
      );
      this.setState({ timestamp: readibletime });
    });
  } catch (e) {
    console.log(e);
  }
}

async function getBlockTime(blockNumber) {
  try {
    const block = await window.web3.eth.getBlock(blockNumber);
    if (block && block.timestamp) {
      return parseInt(block.timestamp);
    } else {
      console.error("Error fetching block " + blockNumber + " :", block);
      return "error";
    }
  } catch (e) {
    console.error("Error fetching timestamp for block " + blockNumber, e);
  }
}

async function getHashtagAsync(hashtag) {
  const hashtagContract = await new window.web3.eth.Contract(
    window.contractAbis.simpleDeal,
    window.hashtag
  );

  let itemHash = window.itemhash;
  var result = await hashtagContract.methods.hashtagName().call();
  var result2 = await getItemData(hashtagContract, itemHash);
  var res = {
    hashtagName: result,
    seeker: result2.ipfsMeta.username,
    seekerAvatar: result2.ipfsMeta.avatarData,
    description: result2.ipfsMeta.description,
    itemValue: result2.itemValue / 1e18,
    seekerRep: result2.seekerRep,
    timestamp: result2.timestamp
  };
  return res;
  //await hashtagContract.methods.hashtagName.call()
}

/**
 * Gets hashtag from the blockchain
 */
async function getItemData(hashtagContract, itemHash) {
  try {
    let itemData = {};
    await Promise.all([
      hashtagContract.methods
        .readItemData(itemHash)
        .call()
        .then(res => {
          itemData.status = res.status;
          itemData.providerAddress = res.providerAddress;
          itemData.providerRep = res.providerRep;
          itemData.numberOfReplies = res.numberOfReplies;
        })
        .catch(e => {
          console.error(`Error calling readItemData(${itemHash}): ${e}`);
        }),
      hashtagContract.methods
        .readItemState(itemHash)
        .call()
        .then(res => {
          itemData.itemValue = res._itemValue;
          itemData.seekerRep = res._seekerRep;
          itemData.seekerAddress = res._seekerAddress;
          itemData.itemMetadataHash = res._itemMetadataHash;
          itemData.creationBlock = res._creationBlock;
        })
        .catch(e => {
          console.error(`Error calling readItemState(${itemHash}): ${e}`);
        })
    ]);
    var ipfsMeta = await ipfsCat(itemData.itemMetadataHash);
    //console.log(JSON.parse(ipfsMeta))
    itemData.ipfsMeta = JSON.parse(ipfsMeta);
    itemData.ipfsMeta.avatarData = await ipfsCat(itemData.ipfsMeta.avatarHash);
    itemData.timestamp = await getBlockTime(itemData.creationBlock);
    console.log(itemData);
    return itemData;
  } catch (e) {
    console.error("Error on getItemData from " + itemHash, e);
  }
}

const retryable = (fn, times = 3) => (...args) =>
  new Promise((resolve, reject) => {
    let attempt = 0;
    function retryAttempt() {
      fn(...args).then(resolve, e => {
        if (e && attempt++ < times)
          setTimeout(retryAttempt, 1000 * Math.random());
        else reject(e);
      });
    }
    retryAttempt();
  });

// Dependencies:
//const Buffer = window.buffer.Buffer;

// Return bytes32 hex string from base58 encoded ipfs hash,
// Enforces that the encoding is SHA-256 32 bytes
// Supports CIDv0 and CIDv1
// |----------CID v1-----------------------------------------------------------------------------------------|
//       |----CID v0-----------------------------------------------------------------------------------------|
// 01 55 12 20 b1 02 74 3d b0 6d ab 56 5f a8 73 fc 41 28 13 90 02 34 1b 80 e2 24 f9 b8 de f7 d7 a4 e4 32 eb 10
// |  |  |  |  | Hash of the data (the rest of bytes)
// |  |  |  | Length of the hash
// |  |  | Hashing algorithm
// |  |
// |
//
// Will return the hash of the data only in hex prepended by 0x
function hashToBytes32(hash) {
  const cid = new CID(hash);
  const hashId = cid.multihash.slice(0, 2).toString("hex");
  const bytes32 = cid.multihash.slice(2).toString("hex");
  if (hashId !== "1220" || bytes32.length / 2 !== 32) {
    console.error(`IPFS hash is not SHA-256 32 bytes: ${hashId} !== "1220"`);
  } else {
    return "0x" + bytes32;
  }
}

// Return base58 encoded ipfs hash from bytes32 hex string,
// Assumes the hashing options are: SHA-256 32 bytes (1220)
// Strips leading "0x" if necessary
// E.g. "0x017dfd85d4f6cb4dcd715a88101f7b1f06cd1e009b2327a0809d01eb9c91f231"
// --> "QmNSUYVKDSvPUnRLKmuxk9diJ6yS96r1TrAXzjTiBcCLAL"

function bytes32ToHash(bytes32) {
  if (!bytes32) {
    throw Error("In ipfs.bytes32ToHash, hash or bytes32 is not defined");
  }
  if (bytes32.startsWith("0x")) bytes32 = bytes32.slice(2);
  // new CID(1, 'raw', buffer.Buffer('12206e6ff7950a36187a801613426e858dce686cd7d7e3c0fc42ee0330072d245c95', 'hex'))
  const cid = new CID(0, "raw", Buffer("1220" + bytes32, "hex"));
  // Returns a base encodec string of the CID. Defaults to base58btc.
  // zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA
  return cid.toBaseEncodedString();
}

function ipfsAdd(data) {
  if (!Buffer.isBuffer(data)) {
    data = Buffer.from(data, "utf8");
  }
  return ipfs.add(data, { hashAlg: "sha2-256", "cid-version": 0 }).then(res => {
    const hash = res[0].hash;
    if (!hash.startsWith("Qm"))
      console.warn(
        "WARNING TO SWARM.CITY DEVS: ipfs cids are not being stored as v0"
      );
    return {
      hash,
      bytes32: hashToBytes32(hash)
    };
  });
}

function isIpfsHash(hash) {
  try {
    const cid = new CID(hash);
    console.log(cid);
    return true;
  } catch (e) {
    return false;
  }
}

function ipfsCat(hash) {
  if (!hash) {
    throw Error("In ipfs.cat, hash is not defined");
  }
  // First check if the hash is a bytes32 and needs conversion
  // Case 1. Starts with "0x", hash for sure
  // Case 2. Check if it is not an ipfs hash
  if (hash.startsWith("0x") || !isIpfsHash(hash)) {
    hash = bytes32ToHash(hash);
  }
  return ipfs.cat(hash).then(file => file.toString("utf8"));
}

window.ipfs = {
  add: retryable(ipfsAdd),
  cat: retryable(ipfsCat)
};

window.ipfsUtils = {
  bytes32ToHash,
  hashToBytes32
};
