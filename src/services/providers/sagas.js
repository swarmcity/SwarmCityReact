import { call, put, fork } from "redux-saga/effects";
import { fetchHashtag } from "services/hashtags/actions";
import CID from "cids";
import Web3 from "web3";

// Service > web3

// Redux doesn't support non-serializable variables like web3
// Therefore, the instances will be hosted in the window

const mountPoint = "providers";
if (!window[mountPoint]) window[mountPoint] = {};

function setWeb3Instance(url) {
  const web3 = new Web3(url);
  window[mountPoint].web3 = web3;
}

function setIpfsInstance(url) {
  if (!url.includes("://")) throw Error("Url must include ://");
  const ipfs = {};
  ipfs.cat = bytes32 =>
    fetch(`${url}/api/v0/cat?arg=${bytes32ToHash(bytes32)}`).then(res =>
      res.json()
    );
  window[mountPoint].ipfs = ipfs;
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

function* testInitialSaga() {
  try {
    const hashtagAddress = "0x59327811AB97B9d56815b9934461d134c78Dd79A";
    yield call(setWeb3Instance, "http://127.0.0.1:7545");
    yield call(setIpfsInstance, "https://ipfs.infura.io");
    yield put(fetchHashtag({ hashtagAddress }));
  } catch (e) {
    console.error(`Error on setInitialWeb3Instance: ${e.stack}`);
  }
}

/******************************* Watchers *************************************/

export default function*() {
  yield fork(testInitialSaga);
}
