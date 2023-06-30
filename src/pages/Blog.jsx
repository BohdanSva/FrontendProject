import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import blogImage from '../assets/images/blog/placeholder.jpg';
import { setBlog, setScroll, setLoader, setCurrentPage,
    selectBlog, selectScroll, selectLoader, selectCurrentPage } from '../features/news/newsSlice';
import '../assets/styles/blog.css';

const Blog = () => {
    // Hooks definitions
    const dispatch = useDispatch();
    const blog = useSelector(selectBlog);
    const scrollLocation = useSelector(selectScroll);
    const loaderState = useSelector(selectLoader);
    let currentPage = useSelector(selectCurrentPage); // The current page, initial state 1

    // Set variables before initialization
    const pageLimit = 10; // Limit to be set depending on API

    // Initialize API - get blog data on page load
    const getBlog = useCallback( async (page, pageLimit) => {
        console.log("getBlog run");
        const blogURL = `https://catfact.ninja/facts?page=${page}&limit=${pageLimit}`;
        try {
        const {data} = await axios.get(blogURL);
        console.log(data);
        dispatch(setBlog(data)); // Saves the API data to the store as "blog"
        } 
        catch (error) {console.log(error);}
    }, [currentPage]);
    useEffect(() => {
        getBlog();
    }, [getBlog]);

    // const getBlog = async (page, pageLimit) => {
    //     const API_URL = `https://catfact.ninja/facts?page=${page}&limit=${pageLimit}`;
    //     const response = await fetch(API_URL);
    //     // handle 404 
    //     if (!response.ok) {
    //         throw new Error(`An error occurred: ${response.status}`);
    //     }
    //     return await response.json();
    // }


    // Identify scroll position and save it into the store as "scroll"
    const rememberScroll = () => {
        const scrollPosition = window.scrollY;
        dispatch(setScroll(scrollPosition));
        console.log(scrollPosition); // Console log scroll position
    };
    useEffect(() => {
        rememberScroll();
        window.addEventListener("scroll", rememberScroll);
        return () => {
          window.removeEventListener("scroll", rememberScroll);
        };
    }, []);

    // Functions to show and hide loading indicator by updating state.loader
    const hideLoader = () => {
        dispatch(setLoader(""));
    };
    const showLoader = () => {
        dispatch(setLoader("show"));
    };

    // Build the DOM - as page loads
    const showBlog = (item) => {
        item.data.map((item, index) => {
            return <div class="blogItem" key={index}>{item.fact}</div>; 
        });
    }

    // Load blog items and show loader while waiting for data
    const loadBlog = async (page, pageLimit) => {
        showLoader(); // Show the loading animation
        try {
                // call the API to get data
                const response = await getBlog(page, pageLimit);
                console.log(response);
                showBlog(response.data); // Call DOM-building function

        } catch (error) {
            console.log(error.message);
        } finally {
            hideLoader();
        }
    };

    // Calculate current page number
    const viewportHeight = document.documentElement.clientHeight;
    const renderedDOMHeight = document.documentElement.scrollHeight;
    if (viewportHeight + renderedDOMHeight >= scrollLocation - 5) { // If scroll reached bottom of page
        dispatch(setCurrentPage(currentPage++)); // Move the current page to the next # 
        loadBlog(currentPage, pageLimit); // Re-render the DOM based on new current page
    }

    loadBlog(currentPage, pageLimit);

    return (
    <>

    <header>
        <h1 className="text-center mt-5 mb-5"> Hotel Blog </h1>
    </header>

    <div className="container">

        <div className="blogClass"> {showBlog()} </div>

        <div className={`loader ${loaderState}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    {/* Component grid cards / Bootstrap */}
    {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="parallax">
            <div className="parallax-top-left"></div>
            <div className="parallax-top-right"></div>
            <div className="parallax-bottom-left"></div>
            <div className="parallax-bottom-right"></div>
            <div className="parallax-content">
            <div className="parallax-front">        
            </div>
            <div className="parallax-back">
                <div className="card h-100">
                    <img src={blogImage} className="card-img-top" alt="blog image"/>
                <div className="card-body">
                    <h5 className="card-title"> This is not self-promotion </h5>
                    <p className="card-text"> I will fill this in after we cover server-side code - there must be a better way than creating a new JSX file for every blog post! </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    </div> */}

    </>
    );
}
 
export default Blog;