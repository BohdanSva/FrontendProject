import React from 'react';
import { useNavigate } from 'react-router-dom';
import newsImage from "../assets/images/menu/news.jpg";
import blogImage from "../assets/images/menu/blog.jpg";
import searchImage from "../assets/images/menu/search.jpg";
import reviewsImage from "../assets/images/menu/reviews.jpg";
import "../assets/styles/menu.scss";

const Menu = () => {
    const navigate = useNavigate();
    const navigateNews = () => navigate('/news');
    const navigateBlog = () => navigate('/blog');
    const navigateSearch = () => navigate('/search');
    const navigateReviews = () => navigate('/reviews');
    const navigateContacts = () => navigate('/contacts');

    return (
    <> 

    {/* First menu row */}
      <div className="animationContent" style={{position: 'absolute', top: '15%', left: '10%'}}>
        <div className="circle">
          <div className="circle_title">
            <h2>News</h2>
            <h3>Read the latest hotel news</h3>
          </div>
          <div onClick={navigateNews} className="circle_inner">
            <div className="circle_inner__layer">
              <img src={newsImage}/>
            </div>
          </div>
          <div className="content_shadow"></div>
        </div>
      </div>

      <div className="animationContent" style={{position: 'absolute', top: '15%', left: '40%'}}>
        <div className="circle">
          <div className="circle_title">
            <h2 style={{whiteSpace: 'nowrap', left:'-1em'}}>Hotel Search Engine</h2>
            <h3 style={{whiteSpace: 'nowrap', left:'-0.5em'}}>Experimental black box technology</h3>
          </div>
          <div onClick={navigateSearch} className="circle_inner">
            <div className="circle_inner__layer">
              <img src={searchImage}/>
            </div>
          </div>
          <div className="content_shadow"></div>
        </div>
      </div>

      <div className="animationContent" style={{position: 'absolute', top: '15%', left: '70%'}}>
        <div className="circle">
          <div className="circle_title">
            <h2>Blog</h2>
            <h3 style={{whiteSpace: 'nowrap', left:'-1em'}}>Written by interns, cheaper than AI</h3>
          </div>
          <div onClick={navigateBlog} className="circle_inner">
            <div className="circle_inner__layer">
              <img src={blogImage}/>
            </div>
          </div>
          <div className="content_shadow"></div>
        </div>
      </div>

    {/* Second menu row */}
      <div className="animationContent" style={{position: 'absolute', top: '45%', left: '25%'}}>
        <div className="circle">
          <div className="circle_title">
            <h2>Reviews</h2>
            <h3 style={{whiteSpace: 'nowrap', left:'-1em'}}>The best reviews we could buy!</h3>
          </div>
          <div onClick={navigateReviews} className="circle_inner">
            <div className="circle_inner__layer">
              <img src={reviewsImage}/>
            </div>
          </div>
          <div className="content_shadow"></div>
        </div>
      </div>

      <div className="animationContent" style={{position: 'absolute', top: '45%', left: '55%'}}>
        <div className="circle">
          <div className="circle_title">
            <h2>Contact Us</h2>
            <h3>Catch us if you can!</h3>
          </div>
          <div onClick={navigateContacts} className="circle_inner">
            <div className="circle_inner__layer">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"/>
            </div>
            <div className="circle_inner__layer">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png"/>
            </div>
            <div className="circle_inner__layer">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png"/>
            </div>
          </div>
          <div className="content_shadow"></div>
        </div>
      </div>

    </>
    );
};
 
export default Menu;