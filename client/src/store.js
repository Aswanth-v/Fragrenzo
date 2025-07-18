import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/Authslice.js"; // <-- .js extension required in ESM
import AdminProductSlice from './redux/Admin/Product-slice.js';
import shoppingProductSlice from './redux/Shop/product-slice.js'
import shoppingCartSlice from './redux/Shop/Cart-slice.js'
import shopAddressSlice from './redux/Shop/Address-slice.js'
import shopOrderSlice from './redux/Shop/order-slice.js'
import adminOrderSlice from './redux/Admin/Order-slice.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts:AdminProductSlice,
    shopProducts:shoppingProductSlice,
    shopCart:shoppingCartSlice,
    shopAddress:shopAddressSlice,
    shopOrder:shopOrderSlice,
    adminOrder: adminOrderSlice,
  },
});
