import { configureStore } from "@reduxjs/toolkit";
import myReducers from "./myReducers";
let store = configureStore({
  reducer: {
    token: myReducers,
  },
});
export default store;
