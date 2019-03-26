import * as t from "./actionTypes";
import merge from "deepmerge";
import { assertAction } from "../utilities";

export default function(state = {}, action) {
  switch (action.type) {
    case t.UPDATE_ITEM:
      assertAction(action, { hashtagAddress: "0x0", itemId: 0, data: {} });
      return merge(state, {
        [action.hashtagAddress]: {
          items: {
            [action.itemId]: action.data
          }
        }
      });

    case t.UPDATE_HASHTAG:
      assertAction(action, { hashtagAddress: "0x0", data: {} });
      return merge(state, {
        [action.hashtagAddress]: action.data
      });

    default:
      return state;
  }
}
