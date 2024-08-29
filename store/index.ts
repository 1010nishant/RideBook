import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "@/features/locationSlice";
import driverReducer from "@/features/driverSlice";

export const store = configureStore({
    reducer: { locationReducer, driverReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
