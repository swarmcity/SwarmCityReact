import saga from "./sagas";
import reducer from "./reducer";

// Service > hashtagList

export const mountPoint = "hashtagList";

export default {
  mountPoint,
  saga,
  reducer
};
