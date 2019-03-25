import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()]
});

export default store;

// Run the saga
sagaMiddleware.run(rootSaga);
