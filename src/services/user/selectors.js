import { mountPoint } from "./";
import { createSelector } from "reselect";

// Service > user

const getLocal = state => state[mountPoint];
export const getUsername = state => getLocal(state).username;
export const getUserAddress = state => getLocal(state).address;
export const getUserAvatar = state => getLocal(state).avatar;
export const getUserBalances = state => getLocal(state).balances;
