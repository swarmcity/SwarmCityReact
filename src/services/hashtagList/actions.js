import * as t from "./actionTypes";

// Service > hashtagList

export const fetchHashtagList = address => ({
  type: t.FETCH_HASHTAG_LIST,
  address
});

export const updateHashtagList = hashtagList => ({
  type: t.UPDATE_HASHTAG_LIST,
  data: hashtagList
});
