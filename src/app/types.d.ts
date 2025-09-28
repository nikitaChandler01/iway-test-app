declare type RootState = ReturnType<typeof import("../config/index").store.getState>;
declare type AppDispatch = typeof store.dispatch;
