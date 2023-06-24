import { useDispatch, useSelector } from "react-redux";
import { PaginationRe } from "./PaginationRe";
import { useEffect } from "react";
import { startLoadingProducts } from "../store/fakeStore/thunks";

export const ProductList = () => {
  const { products, currentPage, productsPerPage } = useSelector(
    (state) => state.store
  );

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <>
      <div className="container-products">
        {products
          .map((product) => {
            return (
              <div className="card-product" key={product.id}>
                <figure className="container-img">
                  <img src={product.image} alt={product.title} />
                </figure>
                <div className="info-product">
                  <h3>{product.title}</h3>
                  <p className="price">$ {product.price}</p>
                  <button>Añadir al carrito</button>
                </div>
              </div>
            );
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <PaginationRe />
    </>
  );
};
