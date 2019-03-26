import { call, put, fork } from "redux-saga/effects";
import { fetchHashtag } from "services/hashtags/actions";
import Web3 from "web3";
import ipfsClient from "ipfs-http-client";

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
  const [protocol, host] = url.split("://");
  const ipfs = ipfsClient({ host, protocol });
  window[mountPoint].ipfs = ipfs;
}

function* testInitialSaga() {
  try {
    const hashtagAddress = "0x47C6527c03f8c15eA3Ab529375d17B2b4C030297";
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
