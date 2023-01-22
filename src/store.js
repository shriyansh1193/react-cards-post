import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import Thunk from "redux-thunk";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
