import { MarkerData } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { driverInterface } from "@/types/type";
import { setUserLocation, setDestinationLocation } from "./locationSlice";

export const driverInitialState = {
    drivers: [],
    selectedDriver: null,
} satisfies driverInterface as driverInterface;

export const driverSlice = createSlice({
    name: "driver",
    initialState: driverInitialState,
    reducers: {
        setSelectedDriver: (state, action: PayloadAction<{ driverId: number }>) => {
            state.selectedDriver = action.payload.driverId;
        },
        setDrivers: (state, action: PayloadAction<{ drivers: MarkerData[] }>) => {
            state.drivers = action.payload.drivers;
        },
        clearSelectedDriver: (state) => {
            state.selectedDriver = null;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<driverInterface>) => {
        builder.addCase(setUserLocation, (state, action) => {
            if (state.selectedDriver) {
                clearSelectedDriver();
            }
        });
        builder.addCase(setDestinationLocation, (state, action) => {
            if (state.selectedDriver) {
                clearSelectedDriver();
            }
        });
    },
});

export const { setSelectedDriver, setDrivers, clearSelectedDriver } = driverSlice.actions;
export default driverSlice.reducer;
