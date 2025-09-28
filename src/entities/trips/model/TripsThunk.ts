import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  tripsApiService,
  type TripsDtoRequest,
} from "@shared/api/entities/trips";

export const loadTripsThunk = createAsyncThunk(
  "trips/loadTrips",
  async (payload: TripsDtoRequest, { rejectWithValue }) => {
    try {
      const response = await tripsApiService.getTrips(payload);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue({
        data: error?.response?.data,
        status: error?.response?.status,
      });
    }
  }
);

