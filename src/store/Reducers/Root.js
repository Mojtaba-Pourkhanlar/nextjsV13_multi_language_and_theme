import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../Actions/Root";

const initialState = {
  language: {},
  darkMode:
    typeof localStorage !== "undefined" &&
    !!JSON.parse(localStorage.getItem("dark")),
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.fetchDictionary.fulfilled, (state, action) => {
      state.language = action.payload;
    })
    .addCase(actions.changeTheme, (state) => {
      state.darkMode = !state.darkMode;
    });
});
