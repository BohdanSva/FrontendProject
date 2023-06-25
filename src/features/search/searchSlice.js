import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setHotelInfo: (state, action) => {
      state.hotelInfo = action.payload;
    },
    setHotelIds: (state, action) => {
      state.hotelIds = action.payload;
    },
    setHotelRates: (state, action) => {
      const copy = {...state};
      copy.hotelRates += action.payload;
      return copy;
    },
  },
});

// Export of reducers
export const { setQuery, setUnits, setSlider, setLocation, setHotelToken, setHotelInfo, setHotelIds, setHotelRates } = searchSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectQuery = (state) => state.search.query;
export const selectUnits = (state) => state.search.units;
export const selectSlider = (state) => state.search.slider;
export const selectLocation = (state) => state.search.location;
export const selectHotelToken = (state) => state.search.hotelToken;
export const selectHotelInfo = (state) => state.search.hotelInfo;
export const selectHotelIds = (state) => state.search.hotelIds;
export const selectHotelRates = (state) => state.search.hotelRates;

export default searchSlice.reducer;
