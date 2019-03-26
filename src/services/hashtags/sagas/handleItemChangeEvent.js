import { put } from "redux-saga/effects";
import * as a from "../actions";
import parseItemStatus from "../parsers/parseItemStatus";
import { toLowercase } from "../../utilities";

/**
 * Handles the HashtagSimpleDeal ItemChange event:
 *   emit ItemChange(itemId, status, providerAddress)
 * @param {Object} event
 */
export default function* handleItemChangeEvent(event) {
  try {
    const hashtagAddress = event.address;
    const { itemId, status, providerAddress } = event.returnValues;
    const data = {
      status: parseItemStatus(status),
      providerAddress: toLowercase(providerAddress)
    };
    yield put(a.updateItem({ hashtagAddress, itemId, data }));
  } catch (e) {
    console.error(`Error on handleItemChangeEvent: ${e.stack}`);
  }
}
