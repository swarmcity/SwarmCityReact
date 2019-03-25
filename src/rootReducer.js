import { combineReducers } from "redux";
import services from "./services";

const initialState = {
  hashtags: [
    { name: "GetSWT", completed: 4 },
    { name: "CommsTasks", completed: 2 },
    { name: "Serendipity", completed: 2 },
    { name: "SC-Support", completed: 1 }
  ]
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HASHTAG":
      return {
        ...state,
        hashtags: [...state.hashtags, action.hashtag]
      };

    default:
      return state;
  }
};

const servicesReducers = {};
Object.values(services).forEach(({ mountPoint, reducer }) => {
  servicesReducers[mountPoint] = reducer;
});

export default combineReducers({
  ...servicesReducers,
  globalReducer
});
