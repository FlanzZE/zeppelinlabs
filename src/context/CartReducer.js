export const SET_PRODUCTS = 'APP/CART/SET_PRODUCTS';
export const REMOVE_PRODUCT = 'APP/CART/REMOVE_PRODUCT';

export const cartState = {
  // actionButton: () => {},
  products: [],

};
// export const setActionButton = (action) => ({
//   type: SET_ACTION_BUTTON,
//   actionButton: action,
// });
export const setProducts = (actStep) => ({
  type: SET_PRODUCTS,
  products: actStep,
});
export const removeProduct = (actStep) => ({
  type: REMOVE_PRODUCT,
  product: actStep,
});

export const cartReducer = (state = cartState, action) => {
  if (action.type === SET_PRODUCTS) {
    window.localStorage.setItem("cart", JSON.stringify([...state.products, action.products]))
    return {
      ...state,
      products: [...state.products, action.products],
    };
  }
  if (action.type === REMOVE_PRODUCT) {
    const prods = [...state.products]
    prods.pop(action.product)
    window.localStorage.setItem("cart", JSON.stringify([...prods]))
    return {
      ...state,
      products: prods,
    };
  }

};
