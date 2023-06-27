import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductCart,
  removeProductCart,
} from "../store/fakeStore/storeSlice";

export const CardProduct = ({ product }) => {
  const { products, productsInCart } = useSelector((state) => state.store);
  const dispatch = useDispatch();

  const handleAddOrRemoveProduct = (productId) => {
    const producto = products.find((producto) => producto.id === productId);
    if (productsInCart.find((product) => product.id === productId)) {
      dispatch(removeProductCart({ id: productId }));
    } else {
      dispatch(addProductCart(producto));
    }
  };
  return (
    <div className="card-product" key={product.id}>
      <figure className="container-img">
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="info-product">
        <h3 className="product-title">{product.title}</h3>
        <p className="price">$ {product.price}</p>
        <button onClick={() => handleAddOrRemoveProduct(product.id)}>
          {productsInCart.find((pdt) => pdt.id === product.id)
            ? "Quitar del carrito"
            : "Añadir al carrito"}
        </button>
      </div>
    </div>
  );
};
