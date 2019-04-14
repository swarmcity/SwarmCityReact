import { put, call, select, takeEvery } from "redux-saga/effects";
import * as a from "./actions";
import * as t from "./actionTypes";
// Fetch functions
import getHashtagList from "./fetchFunctions/getHashtagList";
// Selectors
import { getWeb3Instance } from "services/providers/selectors";

// Service > hashtagList

// xDAI
// const web3 = new Web3("wss://blockscout.com/poa/dai/socket/websocket");

function* fetchHashtagList({ address }) {
  try {
    const web3 = yield select(getWeb3Instance);
    yield put({
      type: "UPDATE_FETCHING",
      topic: "hashtagList",
      fetching: true
    });
    const hashtagList = yield call(getHashtagList, { address, web3 });
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
  yield takeEvery(t.FETCH_HASHTAG_LIST, fetchHashtagList);
}
