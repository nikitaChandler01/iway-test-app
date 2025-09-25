import { userModel } from "@entities/user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userModel.userSlice.reducer,
  },
});
