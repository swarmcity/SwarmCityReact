import { put, call, fork } from "redux-saga/effects";
import * as a from "./actions";

// Service > user

// function* setInitialWeb3Instance() {
//   const web3 = new Web3("https://kovan.infura.io");
//   yield put(a.updateWeb3Instance, web3);
// }

/******************************* Watchers *************************************/

export default function*() {
  // yield fork(setInitialWeb3Instance);
}
