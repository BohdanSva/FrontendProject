import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'idle',
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
    setLocation: (state, action) => {
      state.location = action.payload;
    }
  },
});

// Export of reducers
export const { setQuery, setLocation } = searchSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectQuery = (state) => state.search.query;
export const selectLocation = (state) => state.search.location;

export default searchSlice.reducer;
