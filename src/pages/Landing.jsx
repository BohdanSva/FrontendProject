import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/textCycle.css';
import '../assets/styles/parallaxItems.css';
import phoneFrame from '../assets/images/landing/iphoneFrame.png';
import hotelImage from '../assets/images/landing/hotel.png'; // The first image to be loaded within the frame, then controlled by parallaxItems.js



import chestImage from '../assets/images/landing/chest.png';
import geolocationImage from '../assets/images/landing/geolocation.jpg';
import cityImage from '../assets/images/landing/city.png';
import searchImage from '../assets/images/landing/search.png';

$(document).ready(function() {
    // Load images/text at exact scroll location
    $(window).on("scroll", function() {
      // console.log($(this).scrollTop()) // Check exact scroll pixel location

    // Image control
      if( ($(this).scrollTop() > 400) && ($(this).scrollTop() < 799) ){
        // set to second image
        $(".parallaxItem img").attr("src",geolocationImage);
      } 
      else if( ($(this).scrollTop() > 800) && ($(this).scrollTop() < 1199) ) {
        // change image when scrolled at pixel number #
        $(".parallaxItem img").attr("src",cityImage);
      }
      else if( ($(this).scrollTop() > 1200) && ($(this).scrollTop() < 1599) ) {
        // change image when scrolled at pixel number #
        $(".parallaxItem img").attr("src",searchImage);
      }
      else if( ($(this).scrollTop() > 1600) && ($(this).scrollTop() < 1999) ) {
        // change image when scrolled at pixel number #
        $(".parallaxItem img").attr("src",chestImage);
      }
      else {
        // back to the first image - that is coded into the HTML DOM in first place
        $(".parallaxItem img").attr("src",hotelImage);
      }


    //   Text control
      if(($(this).scrollTop() > 10) && ($(this).scrollTop() < 399)){
        $(".right").addClass("animate__fadeOut");
        $(".right").removeClass("animate__fadeIn");
        $(".left").removeClass("animate__fadeOut");
        $(".left").addClass("animate__fadeIn");
        $(".left h2").text("Our app provides you with detailed data on the ugly underbelly of humanity - hotels");
      } 
      else if( ($(this).scrollTop() > 400) && ($(this).scrollTop() < 799) ) {
        $(".left").addClass("animate__fadeOut");
        $(".left").removeClass("animate__fadeIn");
        $(".right").removeClass("animate__fadeOut");
        $(".right").addClass("animate__fadeIn");
        $(".right h2").text("Every hotel in the world is geolocated and analysed using low-orbit satellite lasers");
      }
      else if( ($(this).scrollTop() > 800) && ($(this).scrollTop() < 1199) ) {
        $(".right").addClass("animate__fadeOut");
        $(".right").removeClass("animate__fadeIn");
        $(".left").removeClass("animate__fadeOut");
        $(".left").addClass("animate__fadeIn");
        $(".left h2").text("Street urchins in every city enquire about hotel rates daily");
      }
      else if( ($(this).scrollTop() > 1200) && ($(this).scrollTop() < 1599) ) {
        $(".left").addClass("animate__fadeOut");
        $(".left").removeClass("animate__fadeIn");
        $(".right").removeClass("animate__fadeOut");
        $(".right").addClass("animate__fadeIn");
        $(".right h2").text("Nuclear engineers and rocket scientists are locked in labs until they come up with something smart");
      }
      else if( ($(this).scrollTop() > 1600) && ($(this).scrollTop() < 1999) ) {
        $(".right").addClass("animate__fadeOut");
        $(".right").removeClass("animate__fadeIn");
        $(".left").removeClass("animate__fadeOut");
        $(".left").addClass("animate__fadeIn");
        $(".left h2").text("Elon Musk reads our reports daily. And his mum, too.");
      }
      else {
        $(".left, right").removeClass("animate__fadeOut");
        $(".left, .right").removeClass("animate__fadeIn");
      }

    })
})




const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/menu');

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
      
        {/* Parallax scroll HTML, supplemented by parallaxItems.js*/}
        <div className="h-100 d-flex align-items-center justify-content-center">
            {/* <div style={{marginTop: '12em', marginBottom: '1.5em', position: 'relative'}}></div> */}

            <div className="container text-center h-100 d-flex align-items-center justify-content-center">
                <div className="col-3 parallaxText left animate__animated">
                    <h2></h2>
                </div>

                <div className="col-3 parallaxText right animate__animated">
                    <h2></h2>
                </div>

                <div className="col-3 d-flex align-items-center justify-content-center">
                    <img src={phoneFrame} className="phoneFrame"/>  
                    <div className="parallaxItem center-block" style={{position: 'fixed', top: '42%'}}>
                        <img src={hotelImage}/> 
                    </div>
                </div>
            </div>
        
            {/* // Filler content so you can scroll */}
            <div className="filler"></div> 
            <div style={{minHeight: '955px', marginBottom: '2000px', position: 'relative'}}></div>
        </div>

        {/* Submit button / Bootstrap style */}
        <div className="col d-flex align-items-center" style={{marginBottom: '50px'}}>
            <button onClick={handleClick} className="btn btn-outline-primary btn-lg" type="submit"> Enter the App </button>
        </div>

        </>
    );
}
 
export default Landing;