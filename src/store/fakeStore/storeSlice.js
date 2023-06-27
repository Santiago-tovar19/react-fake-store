import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    products: [],
    productsInCart: [],
    totalCount: 0,
    totalPrice: 0,
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
    addProductCart: (state, action) => {
      state.productsInCart = [...state.productsInCart, action.payload];
      state.totalCount += 1;
      state.totalPrice = state.productsInCart.reduce(
        (acc, product) => acc + product.price * 1,
        0
      );
    },
    removeProductCart: (state, action) => {
      const productId = action.payload.id;
      const productPrice = action.payload.price;
      state.totalCount -= 1;
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== productId
      );
      state.totalPrice = state.totalPrice - productPrice;
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
  addProductCart,
  removeProductCart,
} = storeSlice.actions;
