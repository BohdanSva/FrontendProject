import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/favicons/favicon-32x32.png';
import '../assets/styles/navbar.css';

const Navbar = () => {
    
    return ( 
    <>

    {/* Navbar / Bootstrap */}
    <nav className="navbar bg-body fixed-top" id="navbar">
    <div className="container-fluid" style={{borderBottomStyle: 'groove' , borderBottomColor: '#3215b4', borderBottomWidth: `1px`}}>

        <Link className="navbar-brand personalFont" to="/">
        <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        Hotel Analysis and Data
        </Link>

        <ul className="nav me-auto navbar-nav d-inline-block">            
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/search">Hotel Search Engine</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item d-inline-block me-4">
                <Link className="nav-link" to="/contacts">Contacts</Link>
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
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/search">Hotel Search Engine</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
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