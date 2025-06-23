import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/Authslice.js"; // <-- .js extension required in ESM

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
