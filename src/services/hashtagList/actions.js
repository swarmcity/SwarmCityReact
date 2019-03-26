import * as t from "./actionTypes";

// Service > hashtagList

export const updateHashtagList = hashtagList => ({
  type: t.UPDATE_HASHTAG_LIST,
  data: hashtagList
});
