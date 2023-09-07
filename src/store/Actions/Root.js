import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const changeTheme = createAction("root/themeChanged");

export const fetchDictionary = createAsyncThunk(
  "root/dictionary/fetch",
  async (lang) => {
    return lang;
  }
);
