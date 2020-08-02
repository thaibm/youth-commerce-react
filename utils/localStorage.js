// Cart store
const cartStateKey = 'cartState';
export const setCartState = (cartState) =>
  localStorage.setItem(cartStateKey, JSON.stringify(cartState));
export const getCartState = () =>
  JSON.parse(localStorage.getItem(cartStateKey));
