import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./features/commentsSlice";

export const commentsStore = configureStore({
  reducer: { comments: commentsReducer },
});
