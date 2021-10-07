import React, { createContext, useContext, useReducer } from 'react';

const Store = createContext();
Store.displayName = 'CartStore';

export const useCartStore = () => useContext(Store);

export const CartProvider = ({ children, initialState, reducer }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[cartState, dispatch]}>{children}</Store.Provider>
  );
};
