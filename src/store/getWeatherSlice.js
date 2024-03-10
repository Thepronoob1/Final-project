import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_KEY = '871d0ef1cb0749339ea225602242802';

const initialState = {
  weatherData: null,
  status: 'idle', 
  error: null,
};

// Async thunk for fetching weather data(used for async operations)
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location, { rejectWithValue }) => {
    const apiKey = API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // reducers for sync operations
  reducers: {},
  // seperating async operations in extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export default weatherSlice.reducer;
