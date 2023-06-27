import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCart } from "../store/fakeStore/storeSlice";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export const CartPage = () => {
  const dispatch = useDispatch();
  const { productsInCart, totalPrice } = useSelector((state) => state.store);

  const handleRemoveProduct = (product) => {
    const { id, price } = product;

    dispatch(removeProductCart({ id: id, price: price }));
  };

  return (
    <>
      <Link to="/">
        <i className="bx bx-arrow-back volver"></i>
      </Link>
      <div className="table2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col col-p">ID</th>
              <th scope="col col-p">Foto</th>
              <th scope="col col-p">precio</th>
              <th scope="col col-p">Categoria</th>
              <th scope="col col-p">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsInCart.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td scope="row">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-cart"
                    />
                  </td>
                  <td scope="row rol-p">{product.price} $</td>
                  <td scope="row rol-p">{product.category}</td>
                  <td scope="row rol-p">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveProduct(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <span className="span-total">
          El precio total es de : {totalPrice < 0.1 ? 0 : totalPrice} $
        </span>
      </div>
    </>
  );
};
