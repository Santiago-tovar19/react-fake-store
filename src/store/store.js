import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./fakeStore/storeSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
  },
});
