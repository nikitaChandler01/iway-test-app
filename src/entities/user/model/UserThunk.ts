import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userApiService,
  type SignInDtoRequest,
} from "@shared/api/entities/user";

export const loginThunk = createAsyncThunk(
  "UserSlice/linkUserTelegramThunk",
  async (payload: SignInDtoRequest, { rejectWithValue }) => {
    try {
      const response = await userApiService.login(payload);
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

