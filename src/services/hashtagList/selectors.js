import { mountPoint } from "./";
import { createSelector } from "reselect";

export const getHashtagList = createSelector(
  state => state[mountPoint],
  hashtagList => hashtagList
);

export const getHashtagListOnlyShown = createSelector(
  getHashtagList,
  hashtagList => hashtagList.filter(({ hashtagShown }) => hashtagShown)
);

export const getItemsByHashtag = createSelector(
  (state, ownProps) => {
    const hashtagAddress = ((ownProps.match || {}).params || {}).hashtagAddress;
    console.log({ hashtagAddress });
  },
  x => x
);
