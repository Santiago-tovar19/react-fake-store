import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    products: [],
    totalProducts: 0,
    productsPerPage: 6,
    currentPage: 1,
    status: "loading",
  },
  reducers: {
    productsLoading: (state, action) => {
      state.products = action.payload.products;
      state.totalProducts = state.products.length;
      state.status = "loaded";
    },
    checkingStatus: (state) => {
      state.status = "loading";
    },
    onPreviusPage: (state) => {
      state.currentPage -= 1;
    },
    onNextPage: (state) => {
      state.currentPage += 1;
    },
    onSpecificPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  productsLoading,
  checkingStatus,
  onPreviusPage,
  onNextPage,
  onSpecificPage,
} = storeSlice.actions;
