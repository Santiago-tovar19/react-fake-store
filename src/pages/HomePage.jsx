import React from "react";
import { ProductList } from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { status, totalCount } = useSelector((state) => state.store);

  const dispatch = useDispatch();
  return (
    <div>
      {status === "loading" ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="Navigator">
            <span>.</span>
            <div className="navigator-title">
              <h1 className="title">FakeStore</h1>
            </div>
            <div className="Navigator-cart">
              <span>{totalCount}</span>
              <Link to="/cart">
                <i class="bx bxs-cart"></i>
              </Link>
            </div>
          </div>

          <ProductList />
        </>
      )}
    </div>
  );
};
