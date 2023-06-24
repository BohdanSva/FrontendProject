// Node modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Links to pages
import Blog from './pages/Blog'
import Contacts from './pages/Contacts';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import News from './pages/News';
import NotFound from "./pages/NotFound";
import Reviews from './pages/Reviews';
import Search from './pages/Search';

// Styles
import './assets/styles/app.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;