import * as t from "./actionTypes";

export const fetchHashtag = hashtagAddress => ({
  type: t.FETCH_HASHTAG,
  hashtagAddress
});

export const updateItem = ({ hashtagAddress, itemId, data }) => ({
  type: t.UPDATE_ITEM,
  hashtagAddress,
  itemId,
  data
});

export const updateHashtag = ({ hashtagAddress, data }) => ({
  type: t.UPDATE_HASHTAG,
  hashtagAddress,
  data
});
