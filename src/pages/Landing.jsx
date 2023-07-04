import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setScroll, selectScroll } from '../features/news/newsSlice';
import '../assets/styles/landing.css';

import phoneFrame from '../assets/images/landing/iphoneFrame.png';
import hotelImage from '../assets/images/landing/hotel.png'; 
import geolocationImage from '../assets/images/landing/geolocation.jpg';
import cityImage from '../assets/images/landing/city.png';
import searchImage from '../assets/images/landing/search.png';
import chestImage from '../assets/images/landing/chest.png';

const Landing = () => {
  // Hooks definitions
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => navigate('/menu');
  const scrollLocation = useSelector(selectScroll);

  // Identify scroll position and save it into the newsSlice store as "scroll"
  const rememberScroll = () => {
    const scrollPosition = window.scrollY;
    dispatch(setScroll(scrollPosition));
    // console.log(scrollPosition); // Console log scroll position
  };
  useEffect(() => {
    rememberScroll();
    window.addEventListener("scroll", rememberScroll);
    return () => {
      window.removeEventListener("scroll", rememberScroll);
    };
  }, []);

  // Swap images and text as the user scrolls down
  let parallaxImage = hotelImage;
  let animationLeft = "";
  let animationRight = "";
  let textLeft = "";
  let textRight = "";

  switch (true) {
    case (scrollLocation>10&&scrollLocation<399):
      parallaxImage = hotelImage;
      animationLeft="animate__fadeIn";
      animationRight="animate__fadeOut";
      textLeft="Our app provides you with detailed data on the ugly underbelly of humanity - hotels";
      break;
    case (scrollLocation>400&&scrollLocation<799):
      parallaxImage = geolocationImage;
      animationLeft="animate__fadeOut";
      animationRight="animate__fadeIn";
      textRight="Every hotel in the world is geolocated and analysed using low-orbit satellite lasers";
      break;
    case (scrollLocation>800&&scrollLocation<1199):
      parallaxImage = cityImage;
      animationLeft="animate__fadeIn";
      animationRight="animate__fadeOut";
      textLeft="Street urchins in every city enquire about hotel rates daily";
      break;
    case (scrollLocation>1200&&scrollLocation<1599):
      parallaxImage = searchImage;
      animationLeft="animate__fadeOut";
      animationRight="animate__fadeIn";
      textRight="Nuclear engineers and rocket scientists are locked in labs until they come up with something smart";
      break;
    case (scrollLocation>1600):
      parallaxImage = chestImage;
      animationLeft="animate__fadeIn";
      animationRight="animate__fadeOut";
      textLeft="Elon Musk reads our reports daily. And his mum, too.";
      break;
  };

    return (
        <>

        {/* Text cycle HTML, supplemented by textCycle.css */}
        <div className="container text-center h-100 d-flex justify-content-around sticky-top">
            <div className="cycleBox"> Hotel
                <div className="word">
                    <span>search engine</span>
                    <span>data treasure</span>
                    <span>news in one place </span>
                    <span>pricing infromation </span>
                    <span>geolocation system</span>
                </div>
            </div>
        </div>

        {/* Parallax scroll animations in the left and right text boxes*/}
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container text-center h-100 d-flex align-items-center justify-content-center">
                <div className={`col-3 parallaxText left animate__animated ${animationLeft}`}>
                    <h2>{textLeft}</h2>
                </div>
                <div className={`col-3 parallaxText right animate__animated ${animationRight}`}>
                    <h2>{textRight}</h2>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <img src={phoneFrame} className="phoneFrame"/>  
                  <div className="parallaxItem center-block" style={{position: 'fixed', top: '42%'}}>
                    <img src={parallaxImage}/>
                  </div>
                </div>
            </div>
        
            {/* // Filler content controlling website height */}
            <div className="filler"></div> 
            <div style={{minHeight: '955px', marginBottom: '2000px', position: 'relative'}}></div>
        </div>

        {/* Submit button / Bootstrap style */}
        <div className="col d-flex align-items-center" style={{marginBottom: '50px'}}>
            <button onClick={handleClick} id="enterButton" className="btn btn-outline-primary btn-lg" type="submit"> Enter the App </button>
        </div>

        </>
    );
}
 
export default Landing;