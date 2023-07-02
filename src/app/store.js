import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import newsReducer from '../features/news/newsSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    news: newsReducer,
    contact: contactReducer,
  },
});
