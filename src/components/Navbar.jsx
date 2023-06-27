import React from 'react';
import logoImage from '../assets/favicons/favicon-32x32.png'
import selectActivePage from './selectActivePage.js';

const Navbar = () => {

    return ( 
    <>

    {/* Navbar / Bootstrap */}
    {selectActivePage()}
    <nav className="navbar bg-body fixed-top" id="navbar">
    <div className="container-fluid">

        <a className="navbar-brand" href="/menu">
        <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        Hotel Search Engine and Data
        </a>
        
        <ul class="nav me-auto navbar-nav d-inline-block">
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/menu">Home</a>
            </li>
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/news">News</a>
            </li>
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/search">Hotel search engine</a>
            </li>
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/reviews">Reviews</a>
            </li>
            <li className="nav-item d-inline-block me-4">
                <a className="nav-link" href="/contacts">Contacts</a>
            </li>
        </ul>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Hotel Search Engine and Data</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body" style={{textAlign: 'left'}}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/search">Hotel search engine</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/reviews">Reviews</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contacts">Contacts</a>
            </li>
            </ul>
        </div>
        </div>
        
    </div>
    </nav>
    </>
    
    );
}
 
export default Navbar;