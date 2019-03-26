import { put, call, fork, select } from "redux-saga/effects";
import * as a from "../actions";
import newHashtagSimpleDeal from "contracts/newHashtagSimpleDeal";
// Sagas
import fetchHashtagMetadataSaga from "./fetchHashtagMetadataSaga";
import fetchItemSaga from "./fetchItemSaga";
import fetchUserRepliesSaga from "./fetchUserRepliesSaga";
// Fetch functions
import fetchHashtagContractData from "../fetchFunctions/fetchHashtagContractData";
// Selectors
import { getWeb3Instance } from "services/providers/selectors";
// Utilitites
import { assertObjTypes } from "../../utilities";

export default function* fetchHashtagSaga({ hashtagAddress }) {
  try {
    const web3 = yield select(getWeb3Instance);
    assertObjTypes(
      { hashtagAddress, web3 },
      { hashtagAddress: "0x", web3: {} }
    );
    if (!web3.utils.isAddress(hashtagAddress)) {
      throw Error(`hashtagAddress ${hashtagAddress} must be valid`);
    }

    const hashtagContract = new web3.eth.Contract(
      newHashtagSimpleDeal,
      hashtagAddress
    );

    const hashtagContractData = yield call(
      fetchHashtagContractData,
      hashtagContract
    );
    yield put(a.updateHashtag({ hashtagAddress, data: hashtagContractData }));

    // Resolve the hashtag's metadata
    yield fork(fetchHashtagMetadataSaga, {
      hashtagAddress,
      hash: hashtagContractData.metadataHash
    });

    // Fetch each item's contract state + IPFS metadata.
    for (let itemId = 0; itemId < hashtagContractData.itemCount; itemId++) {
      yield fork(fetchItemSaga, { itemId, hashtagContract, hashtagAddress });
    }

    // Fetch reply events indexed by replier = user, to show them as relevant to the user
    yield fork(fetchUserRepliesSaga, { hashtagContract, hashtagAddress });
  } catch (e) {
    console.error(`Error on fetchHashtagSaga: ${e.stack}`);
  }
}
