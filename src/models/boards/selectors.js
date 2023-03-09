import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  (state) => state.boards,
);

export const selectBoards = createSelector(
  rootSelector,
  (state) => state.boards,
);
