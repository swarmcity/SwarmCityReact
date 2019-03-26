import { fork, takeEvery } from "redux-saga/effects";
import * as t from "./actionTypes";
// Sagas
import fetchHashtagSaga from "./sagas/fetchHashtagSaga";

/******************************* Watchers *************************************/

export default function* hashtagRootSaga() {
  yield takeEvery(t.FETCH_HASHTAG, fetchHashtagSaga);
}
