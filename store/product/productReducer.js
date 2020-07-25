import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_CURRENCY_SUCCESS } from "./productActions";

const initialState = {
    pending: false,
    products: [],
    currency: null,
    error: null
}

export const productsReducer = (state = initialState, action) => {
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
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        pending: false,
        currency: action.currency,
      };
    default:
      return state;
  }
}
