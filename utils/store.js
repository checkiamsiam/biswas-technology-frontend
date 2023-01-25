import { configureStore } from "@reduxjs/toolkit";
import { apiBase } from "../features/api/ApiBase";

const store = configureStore({
  reducer: {
    [apiBase.reducerPath]: apiBase.reducer,
  },
  middleware: (gdm) => gdm().concat(apiBase.middleware),
});

export default store;
