import { configureStore } from "@reduxjs/toolkit";
import boards from "../models/boards/boardsSlice";

export const store = configureStore({
  reducer: {
    boards,
  },
});
