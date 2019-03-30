import * as t from "./actionTypes";

// Service > user

export const updateWeb3Instance = userAddress => ({
  type: t.UPDATE_USER_ADDRESS,
  userAddress
});
