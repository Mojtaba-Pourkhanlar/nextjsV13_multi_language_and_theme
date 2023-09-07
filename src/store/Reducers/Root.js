import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../Actions/Root";

const initialState = {
  language: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.fetchDictionary.fulfilled, (state, action) => {
    state.language = action.payload;
  });
});
