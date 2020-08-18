import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCT_BY_ID_SUCCESS } from "./productActions";

const initialState = {
  pending: false,
  products: [],
  error: null,
  currentProduct: null
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.products,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        currentProduct: action.product,
      };
    default:
      return state;
  }
}
