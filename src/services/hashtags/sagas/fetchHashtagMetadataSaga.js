import { put, call, select } from "redux-saga/effects";
import * as a from "../actions";
import fetchHashtagMetadata from "../fetchFunctions/fetchHashtagMetadata";
// Utilities
import { assertObjTypes } from "../../utilities";
// Selectors
import { getIpfsInstance } from "services/providers/selectors";

export default function* fetchHashtagMetadataSaga({ hashtagAddress, hash }) {
  try {
    const ipfs = yield select(getIpfsInstance);
    assertObjTypes(
      { hashtagAddress, hash, ipfs },
      { hashtagAddress: "0x", hash: "Qm", ipfs: {} }
    );
    const metadata = yield call(fetchHashtagMetadata, { hash, ipfs });
    yield put(a.updateHashtag({ hashtagAddress, data: metadata }));
  } catch (e) {
    console.error(`Error on fetchHashtagMetadataSaga: ${e.stack}`);
  }
}
