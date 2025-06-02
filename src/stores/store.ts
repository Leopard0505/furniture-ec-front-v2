import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type ApplicationRootState = ReturnType<typeof rootReducer>;
export type ApplicationDispatch = typeof store.dispatch;
