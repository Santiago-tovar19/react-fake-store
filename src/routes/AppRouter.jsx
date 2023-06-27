import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};
