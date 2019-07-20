import * as t from "./actionTypes";

// Service > user

// Triggers reducer

export const updateUsername = username => ({
  type: t.UPDATE_USER_NAME,
  username
});

export const updateUserAddress = address => ({
  type: t.UPDATE_USER_ADDRESS,
  address
});

export const updateUserKeystore = keystore => ({
  type: t.UPDATE_USER_KEYSTORE,
  keystore
});

export const updateAvatar = avatar => ({
  type: t.UPDATE_USER_AVATAR,
  avatar
});

export const updateAvatarHash = avatarHash => ({
  type: t.UPDATE_USER_AVATAR_HASH,
  avatarHash
});

// Triggers a saga

export const createAccount = ({ username, avatar, password }) => ({
  type: t.CREATE_ACCOUNT,
  username,
  avatar,
  password
});
