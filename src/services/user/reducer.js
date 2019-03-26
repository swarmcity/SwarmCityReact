import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > user

const initialState = {
  userAddress: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case t.UPDATE_USER_ADDRESS:
      assertAction(action, { userAddress: {} });
      return {
        ...state,
        userAddress: action.userAddress
      };

    default:
      return state;
  }
}
