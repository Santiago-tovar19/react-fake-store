import { checkingStatus, productsLoading } from "./storeSlice";

export const startLoadingProducts = () => {
  return async (dispatch) => {
    dispatch(checkingStatus());

    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();

    //hay dos formas de mandar el dispatch, 1) mandar products desestructurado. cuando llega al slice hay que poner action.payload.products... 2) tambien esta la posibilidad de mandar el objeto completo, solo que en el slice tendriamos que poner {payload} asi desestructurado en vez de (action) tambien tendriamos que poner state.products = payload que ya viene desestructurado en vez de action.payload.producs... podemos usar el que queramos

    dispatch(productsLoading({ products }));
  };
};
