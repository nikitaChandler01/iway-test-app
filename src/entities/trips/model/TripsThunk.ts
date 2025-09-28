import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  tripsApiService,
  type TripsDtoRequest,
} from "@shared/api/entities/trips";

export const loadTripsThunk = createAsyncThunk(
  "trips/loadTrips",
  async (payload: TripsDtoRequest | undefined, { rejectWithValue }) => {
    try {
      const response = await tripsApiService.getTrips(payload);
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response.result;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue({
        data: error?.response?.data,
        status: error?.response?.status,
      });
    }
  }
);

