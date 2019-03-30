import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > user

const initialState = {
  userAddress: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
