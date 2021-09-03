import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer";
import favItemReducer from "./reducer";

const store = configureStore({
  reducer: {
    orderReducer: orderReducer,
    favItemReducer: favItemReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
