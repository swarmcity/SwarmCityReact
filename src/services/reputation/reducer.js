import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > reputation
const initialState = {
  "0xuserAddress": {
    "0xHashtagAddress": {
      provider: "5",
      seeker: "0"
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
