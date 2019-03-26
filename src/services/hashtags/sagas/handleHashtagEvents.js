import { call } from "redux-saga/effects";
import fetchItemSaga from "./fetchItemSaga";
import handleReplyItemEvent from "./handleReplyItemEvent";
import handleItemChangeEvent from "./handleItemChangeEvent";

export default function* handleHashtagEvents(event) {
  try {
    const eventId = event.event;
    const hashtagAddress = event.address;
    const itemId = event.returnValues.itemId;
    if (eventId === "NewItem") {
      // NewItem(owner, itemId, itemValue, itemMetadataHash);
      // Recycles the logic for fetching the item's state. Fetches the contract data + resolves metadata
      yield call(fetchItemSaga, { itemId, hashtagAddress });
    } else if (eventId === "ReplyItem") {
      // Replies are always handled as events, call its handler
      yield call(handleReplyItemEvent, event);
    } else if (eventId === "ItemChange") {
      // Parse the event update the item
      yield call(handleItemChangeEvent, event);
    } else {
      console.error(`Received unknown event ${eventId}`, event);
    }
  } catch (e) {
    console.error(`Error on handleHashtagEvents: ${e.stack}`);
  }
}
