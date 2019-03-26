import { mountPoint } from "./";
import { createSelector } from "reselect";

// Service > user

export const getLocal = createSelector(
  state => state[mountPoint],
  hashtagList => hashtagList
);

export const getUserAddress = createSelector(
  getLocal,
  local => local.userAddress
);
