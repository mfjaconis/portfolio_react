import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile";

export const store = configureStore({
    profile: profileReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch