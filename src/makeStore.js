import { createStore } from "redux";
import reducer from "./reducer";

const makeStore = initialState => {
  return createStore(reducer, initialState);
};

export default makeStore;