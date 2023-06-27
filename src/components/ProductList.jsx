import { useDispatch, useSelector } from "react-redux";
import { PaginationRe } from "./PaginationRe";
import { CardProduct } from "./CardProduct";

export const ProductList = () => {
  const { products, currentPage, productsPerPage } = useSelector(
    (state) => state.store
  );

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-products">
        {products
          .map((product) => {
            return <CardProduct product={product} />;
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <PaginationRe />
    </>
  );
};
