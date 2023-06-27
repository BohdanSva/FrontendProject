// Node modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import functional components
import Navbar from './components/Navbar';

// Import pages
import Blog from './pages/Blog'
import Contacts from './pages/Contacts';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import News from './pages/News';
import NotFound from "./pages/NotFound";
import Reviews from './pages/Reviews';
import Search from './pages/Search';
import Loading from './pages/Loading';
import Output from './pages/Output';

// Styles
import './assets/styles/app.css';

function App() {

  return (
    <>
    <Navbar/>

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/search" element={<Search />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/output" element={<Output />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
