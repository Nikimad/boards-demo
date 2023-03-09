import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, {payload}) {
      state.boards = [
        {
          title: payload,
          id: Date.now(),
        },
        ...state.boards,
      ];
    }
  },
});

export const { addBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
