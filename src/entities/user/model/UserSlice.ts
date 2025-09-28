import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "./UserThunk";
import { apiService } from "@shared/api/api";

export interface IUser {
  isAuthorized: boolean;
  // потенциально другие поля юзера
}

const initialState: IUser = {
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuthorized = true;
      if (action.payload.result)
        apiService.setAuthorizationHeader(action.payload.result.token);
    });
  },
});

export const { setIsAuthorized } = userSlice.actions;

