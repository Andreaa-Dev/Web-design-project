import { createReducer } from "@reduxjs/toolkit";
import { addOrder, addFavItem } from "./action";

import data, { DataType } from "../../data";

type InitialStateType = {
  products: DataType[];
  cart: DataType[];
};

const initialState: InitialStateType = {
  products: data,
  cart: [],
};
const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    const id = action.payload;
    const product = state.products.find((item) => {
      return item.id === id;
    });
    if (product === undefined) return;
    state.cart.push(product);
  });

  builder.addCase(addFavItem, (state, action) => {
    const id = action.payload;
    const product = state.products.find((item) => {
      return item.id === id;
    });
    if (product === undefined) return;
    state.cart.push(product);
  });
});

export default orderReducer;
