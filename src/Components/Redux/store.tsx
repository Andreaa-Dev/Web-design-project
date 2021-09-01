import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer";

const store = configureStore({
  reducer: {
    orderReducer: orderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
