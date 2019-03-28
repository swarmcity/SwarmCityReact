import { mountPoint } from "./";
import { createSelector } from "reselect";

export const getHashtags = createSelector(
  state => state[mountPoint],
  hashtags => hashtags
);

export const getItemsByHashtag = createSelector(
  (state, ownProps) => ((ownProps.match || {}).params || {}).hashtagAddress,
  getHashtags,
  (hashtagAddress, hashtags) =>
    Object.values((hashtags[hashtagAddress] || {}).items || {})
);
