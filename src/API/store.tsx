import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "./_apiMovies";
const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
