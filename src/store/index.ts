import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./slices/app.slice";
import appApi from './api/app.api';

export const store = configureStore({
    reducer: {
        app: appReducer,
        [appApi.reducerPath]: appApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appApi.middleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']