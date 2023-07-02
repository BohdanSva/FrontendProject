import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1, // Set starting page to 1
  blog: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsItems: (state, action) => {
      state.items = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = [...state.blog, ...action.payload]; // You're merging the two arrays - the old state and the new data being loaded from API into the state
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Export of reducers
export const { setNewsItems, setBlog, setScroll, setLoader, setCurrentPage } = newsSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectNewsItems = (state) => state.news.items;
export const selectBlog = (state) => state.news.blog;
export const selectScroll = (state) => state.news.scroll;
export const selectLoader = (state) => state.news.loader;
export const selectCurrentPage = (state) => state.news.currentPage;

export default newsSlice.reducer;
