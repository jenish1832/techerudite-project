import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    settings: settingsReducer,
  },
});
