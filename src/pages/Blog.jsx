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

    // Initialize API - get blog data on launch, and then as current page changes
    const getBlog = useCallback( async () => {
        showLoader();
        const blogURL = `https://catfact.ninja/facts?page=${currentPage}&limit=${pageLimit}`;
        try {
        const {data} = await axios.get(blogURL);
        dispatch(setBlog(data.data)); // Saves the API data to the store as "blog"
        hideLoader();
        } 
        catch (error) {console.log(error);}
    }, [currentPage]);
    useEffect(() => {
        getBlog();
    }, [getBlog]);

    // Identify scroll position and save it into the store as "scroll"
    const rememberScroll = () => {
        const scrollPosition = window.scrollY; // Offset from the top
        dispatch(setScroll(scrollPosition));
        // console.log(scrollPosition); // Console log scroll position
        
        // Calculate current page number
        const viewportHeight = document.documentElement.clientHeight;
        const renderedDOMHeight = document.documentElement.scrollHeight;
        if ((scrollPosition + viewportHeight) > (renderedDOMHeight - viewportHeight)) { // If scroll reached bottom of page
        dispatch(setCurrentPage(currentPage++)); // Move the current page to the next # 
        // loadBlog(currentPage, pageLimit); // Re-render the DOM based on new current page
    }
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

    if (!blog) return showLoader() // If there is no data, show the loader

    return (
    <>

    <header>
        <h1 className="text-center mt-5 mb-5"> Hotel Blog </h1>
    </header>

    <div className="container">

        <div className="blogClass"> {blog.map((item, index)=>{
            return <div className="blogItem" key={index}>{item.fact}</div>; 
        })} </div>

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