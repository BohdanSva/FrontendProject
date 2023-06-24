import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { setQuery, setLocation, selectQuery, selectLocation} from "../features/search/searchSlice";

const Search = () => {
  //Hooks definitions
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const location = useSelector(selectLocation);

  // Save every search input as query
  const onSearchInput = (e) => {
    dispatch(setQuery(e.target.value)); // You're dispatching action from slice setQuery, the inputted value is then "query"
  };

  // Getting data from API
  const getLocation = async () => {
    const geocodingURL = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${query}&format=json&limit=1`;
    try {
    const {data} = await axios.get(geocodingURL);
    dispatch(setLocation(data)); // Dispatches action setLocation, so data = "location" in the store, but this is asynchronous and to read "location", you need selectLocation
    } 
    catch (error) {console.log(error);}
  }

  // Fire getLocation to send query to API on click
  const sendAddress = (e) => {
    e.preventDefault(); // Do not reload page on click / sending data to API
    getLocation(query);
  }

    return (
    <>
    
    <header>
    <h1 className="text-center mt-5 mb-5"> This is the search page </h1>
    </header>

    <section aria-label="User input form">
    <form id="locationInput">
      {/*Form input field / Bootstrap style*/}
      <div className="d-grid gap-2 col-5 mx-auto mb-3">
        <label htmlFor="locationSearch" className="form-label mx-auto">Enter address</label>
        <input onInput={onSearchInput} type="text" className="form-control" name="locationSearch" placeholder="Buckingham Palace, London SW1A"/>
        <div id="passwordHelpBlock" className="form-text">
          Our database covers any location in the world. Your search should include house name or number, street, city and post code as a minimum, and must not contain special characters or emoji.
        </div>
      </div>

      {/* Submit button / Bootstrap style */}
      <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={sendAddress} className="btn btn-primary" type="submit">Submit address</button>
      </div>
    </form>
  </section>

    </>
    );
}
 
export default Search;