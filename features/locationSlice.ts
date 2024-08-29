import { locationInterface } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { store } from "@/store";
// import { clearSelectedDriver, driverInitialState } from "@/features/driverSlice";

const initialState = {
    userLatitude: null,
    userLongitude: null,
    userAddress: "",
    destinationLatitude: null,
    destinationLongitude: null,
    destinationAddress: null,
} satisfies locationInterface as locationInterface;

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setUserLocation: (
            state,
            action: PayloadAction<{ latitude: number; longitude: number; address: string }>,
        ) => {
            state.userLatitude = action.payload.latitude;
            state.userLongitude = action.payload.longitude;
            state.userAddress = action.payload.address;
            // const { selectedDriver } = store.getState().driverReducer;
            // if (selectedDriver) clearSelectedDriver();
        },
        setDestinationLocation: (
            state,
            action: PayloadAction<{ latitude: number; longitude: number; address: string }>,
        ) => {
            state.destinationLatitude = action.payload.latitude;
            state.destinationLongitude = action.payload.longitude;
            state.destinationAddress = action.payload.address;
        },
    },
    // extraReducers: (builder: ActionReducerMapBuilder<locationInterface>) => {
    //     builder.addCase(clearSelectedDriver, (state) => {

    //     });
    // },
});

export const { setUserLocation, setDestinationLocation } = locationSlice.actions;
export default locationSlice.reducer;
