import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const {} = boardsSlice.actions;

export default boardsSlice.reducer;
