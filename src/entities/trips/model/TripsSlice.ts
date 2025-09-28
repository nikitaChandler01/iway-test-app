import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TripDtoResponse } from "@shared/api/entities/trips";
import { loadTripsThunk } from "./TripsThunk";

export interface ITrips {
  trips: TripDtoResponse[];
  choosenTrip: TripDtoResponse | null;
  page_count: number | null;
  page: number | null;
  total_items: number | null;
  error: TError | null;
  loading: boolean;
}

const initialState: ITrips = {
  trips: [],
  choosenTrip: null,
  page_count: null,
  page: null,
  total_items: null,
  error: null,
  loading: false,
};

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action: PayloadAction<TripDtoResponse[]>) => {
      state.trips = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTripsThunk.fulfilled, (state, action) => {
      const { page, page_count, total_items } = action.payload.page_data;
      state.trips = action.payload.orders;
      state.page = page;
      state.page_count = page_count;
      state.total_items = total_items;
      state.loading = false;
    });
    builder.addCase(loadTripsThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadTripsThunk.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const { setTrips } = tripsSlice.actions;

