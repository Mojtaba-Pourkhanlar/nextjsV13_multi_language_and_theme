import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Reducers/Root";

const reducer = combineReducers({
  root: RootReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
