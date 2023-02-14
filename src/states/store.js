import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer";

export const commentsStore = configureStore({
  reducer: commentReducer,
});
