import { mountPoint } from "./";
import { createSelector } from "reselect";

// Service > hashtagList

export const getHashtagList = createSelector(
  state => state[mountPoint],
  hashtagList => hashtagList
);

export const getHashtagListOnlyShown = createSelector(
  getHashtagList,
  hashtagList => hashtagList.filter(({ hashtagShown }) => hashtagShown)
);
