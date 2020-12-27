import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

import { rootReducer } from "./reducers/index";
import rootSagas from "./sagas";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

axios.defaults.baseURL =
  "https://run.mocky.io/v3/0066a716-32e3-4ba9-9c45-ab8a85a99e55";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      students: store.getState().students,
    });
  }, 1000)
);

sagaMiddleware.run(rootSagas);

export default store;
