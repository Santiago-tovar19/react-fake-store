import React, { useEffect } from "react";

import { ProductList } from "./components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "./store/fakeStore/thunks";
import { AppRouter } from "./routes/AppRouter";

export const FakeStoreApp = () => {
  const { status } = useSelector((state) => state.store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
};
