import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/Authslice.js"; // <-- .js extension required in ESM
import AdminProductSlice from './redux/Admin/Product-slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts:AdminProductSlice
  },
});
