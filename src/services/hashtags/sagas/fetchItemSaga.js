import { put, call, select } from "redux-saga/effects";
import * as a from "../actions";
import fetchItem from "../fetchFunctions/fetchItem";
// Utilitites
import { assertObjTypes } from "../../utilities";
// Selectors
import { getIpfsInstance } from "services/providers/selectors";
import { getWeb3Instance } from "services/providers/selectors";

export default function* fetchItemSaga({
  itemId,
  hashtagContract,
  hashtagAddress
}) {
  try {
    const ipfs = yield select(getIpfsInstance);
    const web3 = yield select(getWeb3Instance);
    assertObjTypes(
      { itemId, hashtagContract, hashtagAddress },
      { itemId: 0, hashtagContract: {}, hashtagAddress: "0x" }
    );
    assertObjTypes({ ipfs, web3 }, { ipfs: {}, web3: {} });

    const item = yield call(fetchItem, {
      itemId,
      hashtagContract,
      ipfs,
      web3
    });
    yield put(a.updateItem({ hashtagAddress, itemId, data: item }));
  } catch (e) {
    console.error(`Error on fetchItemSaga: ${e.stack}`);
  }
}
