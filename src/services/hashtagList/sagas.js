import { put, call, fork } from "redux-saga/effects";
import * as a from "./actions";
import {
  kovSwtToken,
  hashtagDir,
  simpleDeal
} from "../../contracts/contractsData";
import Web3 from "web3";

const web3Local = new Web3("https://kovan.infura.io");

/**
 * Gets hashtag list from the blockchain
 */
async function getHashtagListFromHashtagList() {
  const hashtagDirContract = new web3Local.eth.Contract(
    hashtagDir.abi,
    hashtagDir.address
  );
  const numberOfHashtags = await hashtagDirContract.methods
    .numberOfHashtags()
    .call()
    .then(res => parseInt(res));
  // Note that: [...Array(5).keys()] = [1,2,3,4,5]
  return await Promise.all(
    [...Array(numberOfHashtags).keys()].map(async i => {
      const hashtag = await hashtagDirContract.methods.readHashtag(i).call();

      const getHashtagReputation = async hashtagAddress => {
        try {
          const hashtagContract = new web3Local.eth.Contract(
            simpleDeal.abi,
            hashtagAddress
          );
          const repAddress = await hashtagContract.methods.SeekerRep().call();
          const repContract = new web3Local.eth.Contract(
            kovSwtToken.abi,
            repAddress
          );
          return await repContract.methods.totalSupply().call();
        } catch (e) {
          console.error(
            `Error fetching total reputation supply from hashtag`,
            e
          );
        }
      };
      return {
        name: decodeURI(hashtag.hashtagName), // string :  Settler
        hashtagMetaIPFS: hashtag.hashtagMetaIPFS, // string :  zb2rhbixVsHPSfBCUowDPDpkQ4QZR84rRpBSDym44i57NWmtE
        address: hashtag.hashtagAddress, // address :  0x3a1a67501b75fbc2d0784e91ea6cafef6455a066
        hashtagShown: hashtag.hashtagShown, // bool :  false
        hashtagReputation: await getHashtagReputation(hashtag.hashtagAddress)
      };
    })
  );
}

function* getHashtagList() {
  try {
    yield put({
      type: "UPDATE_FETCHING",
      topic: "hashtagList",
      fetching: true
    });
    const hashtagList = yield call(getHashtagListFromHashtagList);
    yield put({
      type: "UPDATE_FETCHING",
      topic: "hashtagList",
      fetching: false
    });
    yield put(a.updateHashtagList(hashtagList));
    return hashtagList;
  } catch (e) {
    console.error(e);
  }
}

/*
 * redux-saga root function, which is responsible to call the correct workers
 */
// function* rootSaga() {
//   yield all([
//     yield takeEvery("GET_HASHTAG_LIST", getHashtagList),
//     yield takeEvery("GET_REPUTATION", getReputation)
//   ]);
// }

/******************************* Watchers *************************************/

export default function*() {
  yield fork(getHashtagList);
}
