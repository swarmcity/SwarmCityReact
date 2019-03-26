import saga from "./sagas";
import reducer from "./reducer";

// Service > user

export const mountPoint = "user";

export default {
  mountPoint,
  saga,
  reducer
};
