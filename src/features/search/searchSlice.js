import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  units: "KM",
  slider: 50,
  hotelRates: [], // Must be defined at launch, otherwise the spread operator below would cause it to crash
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
    setCheckin: (state, action) => {
      state.checkin = action.payload;
    },
    setCheckout: (state, action) => {
      state.checkout = action.payload;
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
    setHotelRates: (state, action) => {
      state.hotelRates = [...state.hotelRates, action.payload]
    },
  },
});

// Export of reducers
export const {
  setQuery, setUnits, setSlider, setCheckin, setCheckout, setLocation, setHotelToken, setHotelInfo, setHotelRates
 } = searchSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectQuery = (state) => state.search.query;
export const selectUnits = (state) => state.search.units;
export const selectSlider = (state) => state.search.slider;
export const selectCheckin = (state) => state.search.checkin;
export const selectCheckout = (state) => state.search.checkout;
export const selectLocation = (state) => state.search.location;
export const selectHotelToken = (state) => state.search.hotelToken;
export const selectHotelInfo = (state) => state.search.hotelInfo;
export const selectHotelRates = (state) => state.search.hotelRates;

export default searchSlice.reducer;
