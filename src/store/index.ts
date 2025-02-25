import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api";
import profileReducer from "./profileSlice";

export const store = configureStore({
	reducer: {
		profile: profileReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
