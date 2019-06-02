import * as t from "./actionTypes";

// Service > user

export const updateWeb3Instance = userAddress => ({
  type: t.UPDATE_USER_ADDRESS,
  userAddress
});

export const updateUsername = username => ({
  type: t.UPDATE_USER_NAME,
  username
});

export const updateAvatar = avatar => ({
  type: t.UPDATE_USER_AVATAR,
  avatar
});
