import * as t from "./actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case t.UPDATE_HASHTAG_LIST:
      return action.data;
    default:
      return state;
  }
}
