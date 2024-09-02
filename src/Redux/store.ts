import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./service/dummyData";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
