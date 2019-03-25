import * as t from "./actionTypes";

export const updateHashtagList = hashtagList => ({
  type: t.UPDATE_HASHTAG_LIST,
  data: hashtagList
});
