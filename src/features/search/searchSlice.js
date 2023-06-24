import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: "idle",
  units: "KM",
  slider: 50,
};

// Create the "search" slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setSlider: (state, action) => {
      state.slider = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setHotelToken: (state, action) => {
      state.hotelToken = action.payload;
    },
    setHotelCode: (state, action) => {
      state.hotelCode = action.payload;
    },
    setHotelRates: (state, action) => {
      state.hotelRates = action.payload;
    },
  },
});

// Export of reducers
export const { setQuery, setUnits, setSlider, setLocation, setHotelToken, setHotelCode, setHotelRates } = searchSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectQuery = (state) => state.search.query;
export const selectUnits = (state) => state.search.units;
export const selectSlider = (state) => state.search.slider;
export const selectLocation = (state) => state.search.location;
export const selectHotelToken = (state) => state.search.hotelToken;
export const selectHotelCode = (state) => state.search.hotelCode;
export const selectHotelRates = (state) => state.search.hotelRates;

export default searchSlice.reducer;
