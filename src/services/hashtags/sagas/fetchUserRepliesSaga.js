import { put, call, select } from "redux-saga/effects";
import web3Utils from "web3-utils";
import fetchHashtagUserReplies from "../fetchFunctions/fetchHashtagUserReplies";
import * as a from "../actions";
// Utilities
import { assertObjTypes } from "../../utilities";
// Selectors
import { getUserAddress } from "services/user/selectors";

export default function* fetchUserRepliesSaga({
  hashtagContract,
  hashtagAddress
}) {
  try {
    assertObjTypes(
      { hashtagContract, hashtagAddress },
      { hashtagContract: {}, hashtagAddress: "0x" }
    );
    const userAddress = yield select(getUserAddress);
    if (!userAddress || !web3Utils.isAddress(userAddress)) return;

    const userReplies = yield call(fetchHashtagUserReplies, {
      userAddress,
      hashtagContract
    });
    for (const { itemId } of userReplies) {
      yield put(
        a.updateItem({ hashtagAddress, itemId, data: { userReplied: true } })
      );
    }
  } catch (e) {
    console.error(`Error on fetchUserRepliesSaga: ${e.stack}`);
  }
}
