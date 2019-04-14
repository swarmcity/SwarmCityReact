import { mountPoint } from "./";
import { createSelector } from "reselect";

export const getHashtags = createSelector(
  state => state[mountPoint],
  hashtags => hashtags
);

export const getHashtagByHashtagAddress = createSelector(
  getHashtags,
  (_, hashtagAddress) => hashtagAddress,
  (hashtags, hashtagAddress) => hashtags[hashtagAddress]
);

export const getItemsByHashtagAddress = createSelector(
  getHashtags,
  (_, hashtagAddress) => hashtagAddress,
  (hashtags, hashtagAddress) =>
    Object.values((hashtags[hashtagAddress] || {}).items || {})
);

export const getItemByHashtagAddressAndItemId = createSelector(
  getHashtags,
  (_, hashtagAddress, itemId) => [hashtagAddress, itemId],
  (hashtags, [hashtagAddress, itemId]) =>
    ((hashtags[hashtagAddress] || {}).items || {})[itemId]
);
