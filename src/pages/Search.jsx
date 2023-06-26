import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {
  setQuery, setUnits, setSlider, setLocation, setHotelToken, setHotelInfo, setHotelRates, setCheckin, setCheckout,
  selectQuery, selectUnits, selectSlider, selectCheckin, selectCheckout, selectLocation, selectHotelToken, selectHotelInfo, 
  selectHotelRates } 
  from "../features/search/searchSlice";
import Datepicker from '../features/datepicker/datepicker';

const Search = () => {
  // Hooks definitions
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  let units = useSelector(selectUnits);
  const sliderRange = useSelector(selectSlider);
  const checkin = useSelector(selectCheckin);
  const checkout = useSelector(selectCheckout);
  const location = useSelector(selectLocation);
  const hotelToken = useSelector(selectHotelToken);
  const hotelInfo = useSelector(selectHotelInfo);
  const hotelRates = useSelector(selectHotelRates);

  // Save every user search input into the store
  const onSearchInput = (keystroke) => {
    dispatch(setQuery(keystroke.target.value)); // You're dispatching action from slice setQuery, the inputted value is then "query"
  };
  const onSliderInput = (slider) => {
    dispatch(setSlider(slider.target.value)); // Slider range value saved into "slider"
  }
  const onRadioInput = (radio) => {
    dispatch(setUnits(radio.target.value)); // Measurement system units saved into "units"
  }
  const onCheckin = (event) => {
    dispatch(setCheckin(event.target.value)); // Selected checkin date saved into "checkin"
  }
  const onCheckout = (event) => {
    dispatch(setCheckout(event.target.value)); // Selected checkout date saved into "checkout"
  }

  // Launch API calls after user clicks send
  const sendAddress = (click) => {
    click.preventDefault(); // Do not reload page on click / sending data to API
    getLocation(query)
  }
  useEffect(()=>{
    if(location){
      getHotelInfo(); // getHotelInfo runs after we have location data
    }
  }, [location])
  useEffect(()=>{ // getHotelRates runs after we have hotel info
    if(hotelInfo){
      getHotelRates();
    }
  }, [hotelInfo])

  // Initialize API - get query address coordinates
  const getLocation = async () => {
    const geocodingURL = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${query}&format=json&limit=1`;
    try {
    const {data} = await axios.get(geocodingURL);
    dispatch(setLocation(data)); // Dispatches action setLocation, so data = "location" in the store, but this is asynchronous and to read "location", you need selectLocation
    } 
    catch (error) {console.log(error);}
  }

 // Hotel API - get token
  const getHotelToken = async () => {
  const hotelTokenURL = `https://test.api.amadeus.com/v1/security/oauth2/token`;
  try {
  const {data} = await axios.request({
    url: hotelTokenURL,
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      "client_id": "GNwXWLLKBGWnpFcrte9mdsnISSpcrlKS",
      "client_secret": "FboBWvEcEbmYsI8q",
      "grant_type": "client_credentials",
    }
    });
    dispatch(setHotelToken(data.access_token)); // Dispatches to save data.access_token as "hotelToken" in store
  } catch (error) {console.log(error);}
  }
  useEffect(() => {
    getHotelToken(); // Get API token on app launch
    setInterval(getHotelToken, 1800 * 1000) // Get a new token every 30 minutes thereafter
  }, []);

  // Initialize API - get hotel info within the range from query address
  const getHotelInfo = async () => {
    const hotelInfoURL = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=${location[0].lat}&longitude=${location[0].lon}&radius=${sliderRange}&radiusUnit=${units}&hotelSource=ALL`;
    try {
    const {data} = await axios.request({
      url: hotelInfoURL,
      method: "get",
      headers: {
        "authorization": `Bearer ${hotelToken}`,
      },
    });
    dispatch(setHotelInfo(data)); // Dispatches action setHotelInfo, so data = "hotelInfo" in the store
    } 
    catch (error) {console.log(error);}
  }

  // Initialize API - get hotel rates
  const getHotelRates = async (hotel) => {   
    try {
    for (let hotel in hotelInfo.data) { // Loop through every hotel in hotelInfo.data array
    const hotelRatesURL = `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hotelInfo.data[hotel].hotelId}&adults=1&checkInDate=${checkin}&checkOutDate=${checkout}&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`;
    const {data} = await axios.request({
      url: hotelRatesURL,
      method: "get",
      headers: {
        "authorization": `Bearer ${hotelToken}`,
      },
    });
    console.log(data);
    if (data.data.length > 0) { // Only save hotels with pricing into store
      dispatch(setHotelRates(data.data)); // Dispatches action setHotelRates, so data = "hotelRates" in the store
    };
    }; 
    } 
    catch (error) {console.log(error);}
  }

  return (
    <>
    
    <header>
    <h1 className="text-center mt-5 mb-5"> This is the search page </h1>
    </header>

    <section aria-label="User input form">
    <form id="locationInput">
      {/*Form input field - Bootstrap */}
      <div className="d-grid gap-2 col-7 mx-auto mb-3">
        <label htmlFor="locationSearch" className="form-label mx-auto">Enter address</label>
        <input onInput={onSearchInput} type="text" className="form-control" name="locationSearch" placeholder="Buckingham Palace, London SW1A"/>
        <div id="passwordHelpBlock" className="form-text">
          Your search should include house name or number, street, city and post code as a minimum, and must not contain special characters or emoji.
        </div>
      </div>

      {/* Radio buttons - Bootstrap */}
      <div className="d-grid mx-auto">
        <label className="form-label mx-auto mt-3">Select search range</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="unitsRadio" value="KM" onChange={onRadioInput} defaultChecked/>
        <label className="form-check-label" htmlFor="kilometersRadio">
          Kilometers
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="unitsRadio" value="MILE" onChange={onRadioInput}/>
        <label className="form-check-label" htmlFor="milesRadio">
          Miles
        </label>
      </div>

      {/* Slider - Bootstrap */}
      <label htmlFor="customRange1" className="form-label mt-1"> Search within the range of {sliderRange} {units=="KM" ? "kilometers" : "miles"} </label>
      <input type="range" className="form-range" onChange={onSliderInput} min="0" max="100" defaultValue="50" step="1"/>

      {Datepicker()}
      <div className="container text-center">
      <div className="row">
      <div className="col mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Check-in</label>
        <div className="resetDate">
          <input type="text" onInput={onCheckin} placeholder="From" data-input/>
        </div>
      </div>
      <div className="col mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Check-out</label>
        <div className="resetDate">
          <input type="text" onInput={onCheckout} placeholder="To" data-input/>
        </div>
      </div>
      </div>
      </div>

      {/* Submit button - Bootstrap */}
      <div className="d-grid gap-2 col-3 mx-auto mt-5 mb-3">
        <button onClick={sendAddress} className="btn btn-primary" type="submit">Submit search</button>
      </div>
      
    </form>
    </section>

    </>
  );
};
 
export default Search;