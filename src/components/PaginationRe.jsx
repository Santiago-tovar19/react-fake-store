import { useDispatch, useSelector } from "react-redux";
import {
  onNextPage,
  onPreviusPage,
  onSpecificPage,
} from "../store/fakeStore/storeSlice";

export const PaginationRe = () => {
  const { products, productsPerPage, currentPage, totalProducts } = useSelector(
    (state) => state.store
  );

  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previusPage = () => {
    dispatch(onPreviusPage());
  };

  const nextPage = () => {
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    //   left: 0,
    // });
    dispatch(onNextPage());
  };

  const specificPage = (n) => {
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    //   left: 0,
    // });
    dispatch(onSpecificPage(n));
  };

  return (
    <>
      <nav
        className="pagination is-centered mb-6 pgnt"
        role="navigation"
        aria-label="pagination"
      >
        <button
          className={`pagination-previous butn `}
          disabled={currentPage === 1 ? true : false}
          onClick={previusPage}
        >
          anterior
        </button>
        <button
          className={`pagination-next butn  `}
          disabled={currentPage >= pageNumbers.length ? true : false}
          onClick={nextPage}
        >
          Siguiente
        </button>
        <ul className="pagination-list">
          {pageNumbers.map((noPage) => {
            return (
              <li key={noPage}>
                <a
                  className={`pagination-link ${
                    noPage === currentPage ? "is-current" : ""
                  }`}
                  onClick={() => specificPage(noPage)}
                >
                  {noPage}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
