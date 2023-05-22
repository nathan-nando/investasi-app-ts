import { configureStore } from "@reduxjs/toolkit";
import danaPensiunReducer from "../features/DanaPensiun/slice";

export const store = configureStore({
  reducer: {
    danaPensiun: danaPensiunReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
