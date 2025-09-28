import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TripDtoResponse } from "@shared/api/entities/trips";

export interface ITrips {
  trips: TripDtoResponse[];
  choosenTrip: TripDtoResponse | null;
}

const initialState: ITrips = {
  trips: [],
  choosenTrip: null,
};

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action: PayloadAction<TripDtoResponse[]>) => {
      state.trips = action.payload;
    },
  },
});

export const { setTrips } = tripsSlice.actions;

