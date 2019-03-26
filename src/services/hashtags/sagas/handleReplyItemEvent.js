import { put, call, select } from "redux-saga/effects";
import * as a from "../actions";
import fetchBlockTimestamp from "../fetchFunctions/fetchBlockTimestamp";
import { toLowercase } from "../../utilities";
// Selectors
import { getIpfsInstance } from "services/providers/selectors";
import { getUserAddress } from "services/user/selectors";

/**
 * Handles the HashtagSimpleDeal ItemChange event:
 *   emit ReplyItem(replier, itemId, replyMetadataHash)
 * @param {Object} event
 */
export default function* handleReplyItemEvent(event) {
  try {
    // Get info from stat
    const userAddress = yield select(getUserAddress);
    const ipfs = yield select(getIpfsInstance);
    // Parse reply's data
    const hashtagAddress = event.address;
    const replyId = event.transactionHash;
    const { itemId, replier, replyMetadataHash } = event.returnValues;
    const timestamp = yield call(fetchBlockTimestamp, event.blockNumber);
    const replyMetadata = yield call(ipfs.cat, replyMetadataHash);
    const data = {
      userReplied: userAddress === toLowercase(replier),
      replies: {
        [replyId]: {
          replier: toLowercase(replier),
          timestamp,
          ...replyMetadata
        }
      }
    };
    yield put(a.updateItem({ hashtagAddress, itemId, data }));
  } catch (e) {
    console.log(`Error on handleReplyItemEvent: ${e.stack}`);
  }
}
