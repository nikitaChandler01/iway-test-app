import { tripsModel } from "@entities/trips";
import { userModel } from "@entities/user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userModel.userSlice.reducer,
    trips: tripsModel.tripsSlice.reducer,
  },
});

