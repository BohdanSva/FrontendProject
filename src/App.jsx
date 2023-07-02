// Node modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewsItems } from '../src/features/news/newsSlice';

// Import functional components
import Navbar from './components/Navbar';

// Import pages
import Contacts from './pages/Contacts';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import NotFound from "./pages/NotFound";
import Reviews from './pages/Reviews';
import Search from './pages/Search';
import Loading from './pages/Loading';
import Output from './pages/Output';

import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import News from './pages/News';
import NewsItem from './pages/NewsItem';

// Styles
import './assets/styles/app.css';

// Import JSON data files for automatic DOM creation
import news from "../src/features/news/news.json";

function App() {
  // Hooks definitions
  const dispatch = useDispatch();

  // Save data on the selected news item number from news.json to the store (the "news" slice), as "items"
  // Sort the data before saving to the store
  let sortedNews = [...news] // Create a copy of the data JSON to be sorted
  sortedNews.sort((a, b) => { // Sort function
    return new Date(b.articleDate) - new Date(a.articleDate);
  });
  // Dispatch is delayed so doing this on the News or NewsItem JSX pages would throw "Cannot read properties of undefined" error
  dispatch(setNewsItems(sortedNews)); 

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsSlug" element={<NewsItem/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        
        <Route path="/loading" element={<Loading />} />
        <Route path="/output" element={<Output />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
