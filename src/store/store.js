import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './getWeatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
