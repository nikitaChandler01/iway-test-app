import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "./UserThunk";

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
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.isAuthorized = true;
    });
  },
});

export const { setIsAuthorized } = userSlice.actions;

