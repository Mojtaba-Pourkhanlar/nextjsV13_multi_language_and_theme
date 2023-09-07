import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDictionary = createAsyncThunk(
  "root/dictionary/fetch",
  async (lang) => {
    return lang;
  }
);
