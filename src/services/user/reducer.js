import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > user
const initialState = {
  username: "",
  address: "",
  keystore: null,
  avatar: "",
  avatarHash: "",
  balances: {
    kovan: {
      eth: "15.00",
      swt: "76.40"
    },
    mainnet: {
      eth: "15.00",
      swt: "76.40"
    }
  },
  txs: {
    "0xTransactionHash": {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case t.UPDATE_USER_NAME:
      assertAction(action, { username: "John Doe" });
      return { ...state, username: action.username };

    case t.UPDATE_USER_ADDRESS:
      assertAction(action, { address: "0x127317249124" });
      return { ...state, address: action.address };

    case t.UPDATE_USER_KEYSTORE:
      assertAction(action, { keystore: {} });
      return { ...state, keystore: action.keystore };

    case t.UPDATE_USER_AVATAR:
      assertAction(action, { avatar: "base64 enc string" });
      return { ...state, avatar: action.avatar };

    case t.UPDATE_USER_AVATAR_HASH:
      assertAction(action, { avatarHash: "QmAJZC" });
      return { ...state, avatarHash: action.avatarHash };
    default:
      return state;
  }
}
