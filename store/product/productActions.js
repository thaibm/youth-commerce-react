export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';

export function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error,
  };
}

export function fetchCurrencySuccess(currency) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    currency: currency,
  };
}
