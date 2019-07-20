import { mountPoint } from "./";

// Service > user

const getLocal = state => state[mountPoint];
export const getUsername = state => getLocal(state).username;
export const getUserAddress = state => getLocal(state).address;
export const getUserKeystore = state => getLocal(state).keystore;
export const getUserAvatar = state => getLocal(state).avatar;
export const getUserAvatarHash = state => getLocal(state).avatarHash;
export const getUserBalances = state => getLocal(state).balances;
