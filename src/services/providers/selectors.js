import { createSelector } from "reselect";

// Service > web3

// Redux doesn't support non-serializable variables like web3
// Therefore, the instances will be hosted in the window

const mountPoint = "providers";
if (!window[mountPoint]) window[mountPoint] = {};

export const getWeb3Instance = () => window[mountPoint].web3;
export const getIpfsInstance = () => window[mountPoint].ipfs;
