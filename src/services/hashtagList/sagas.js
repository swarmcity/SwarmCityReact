import { put, call, fork } from "redux-saga/effects";
import * as a from "./actions";
import getHashtagList from "./fetchFunctions/getHashtagList";
import Web3 from "web3";

// Service > hashtagList

const web3 = new Web3(
  "wss://kovan.infura.io/ws/v3/ca70f20892694c5da631eecc4992f7ce"
);

function* fetchHashtagList() {
  try {
    yield put({
      type: "UPDATE_FETCHING",
      topic: "hashtagList",
      fetching: true
    });
    const hashtagList = yield call(getHashtagList, { web3 });
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
  yield fork(fetchHashtagList);
}
