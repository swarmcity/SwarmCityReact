import { mountPoint } from "./";
import { createSelector } from "reselect";

export const getHashtagList = createSelector(
  state => state[mountPoint],
  hashtagList => hashtagList
);
