# Frontend Project - Hotel Analysis and Data

## This project intends create a fully functioning React Toolkit application to check and compare hotel prices within a radius of a user-selected location across the globe

---

## Project Documentation

Included in the project folder are:

- [x] Assets
    - Favicons
    - Images

- [x] Stylesheets
    - The stylesheet index.css is the top-level stylesheet controlling the React application's styles
    - Individual CSS and SCSS stylesheets have been created on an as-needed basis per individual components

- [x] "Page" component JSX files
    1. Landing page
       
    3. Menu
       
    4. News 
        - Summary of news data loaded from a JSON file
          
        4. News item
            - Generates "page" for the user-selected news item
    5. Blog
    6. Hotel search engine
        7. Loading page 
            - For when the search is loading
        8. Output page 
            - To show formatted search output data
    9. Reviews
    10. Contacts
    11. Not found page
        - Shown only in error 404 instances

- [x] "Component" JSX files for each functional component complementing the above-described "page" components
    1. Navbar
    2. Review Card 
        - This component serves as the user interface in the form of a card for Review Form and Review Item components
    3. Review Form
        - Input form allowing the user to grade the page and input text commentary, formatted as the Review Card component
        - Dependencies: calls the Review Card and Rating Select components
        4. Reting Select 
        - Generates grading scale from 1-10 for the user to select from
    5. Review Stats
        - Calculates and displays the total number of ratings and the average rating
    6. Review List
        - Holding box for each individual Review Item components
    7. Review Item
        - Renders each individual review item in the form of a Review Card
        - Dependency: calls the Review Card component
    8. Subscribe Modal

- [x] This project documentation Markdown file

---

## APIs Used

1. Nominatim Geolocation by Address
    - Authentication: none
    - Documentation: https://nominatim.org/release-docs/develop/api/Overview/

2. Amadeus Hotel List Search by Geocode
    - Authentication: Oauth2 token every 30 minutes
    - Documentation: https://developers.amadeus.com/self-service/category/hotels/api-doc/hotel-list/api-reference
    
3. Amadeus Hotel Pricing Search by Hotel ID
    - Authentication: Oauth2 token every 30 minutes (same as above)
    - Documentation: https://developers.amadeus.com/self-service/category/hotels/api-doc/hotel-search/api-reference

4. Cat Fact API
    - Authentication: none
    - Documentation: https://catfact.ninja/

---

## Libraries Used

- Installed:
1. React Icons
2. Axios
3. UUID
    - Unique ID generator
4. Leaflet
    - JS mapping library
5. React Leaflet
    - React mapping library

- Imported via a link to a Content Delivery Network in index.html:
6. Animate CSS
7. Bootstrap CSS and JS
8. Bootstrap Datepicker CSS and JS
9. Font Awesome CSS
10. Flatpickr CSS and JS
    - Datepicker library
11. Leaflet CSS and JS
    - Mapping library
12. jQuery
13. Moment JS
    - Time and date conversion library

---

## Viewport Breakpoints

- The application is using a mobile breakpoint at 600 pixels. 

- The breakpoints are implemented in the relevant CSS files. 

- The mobile version has been optimised for iPhone 12 Pro.

---

## Scope of Functionalities

### Features
- [x] Contact
    - The contactSlice.js manages user inputs such as name, email and message on the Contacts "page"

- [x] News
    - The news.JSON contains data iterated in the News and News Item "pages".
    - The newsSlice.js
        - Downloads news data from the news.JSON file into the store
        - Adds new blog data into the store as they come from the API when user scrolls down the "infinite" scroll on the Blog "page"
        - Saves the current user scroll position into the store
        - Contains the current page number for the "Blog" page
        - Contains the loader on/off state to show or hide the loader animation

- [x] Reviews
    - The ProductData.js file contains the initial 3 reviews to be rendered on the Reviews "page"

- [x] Search
    - Datepicker.js contains additional code that manages the date picker functionality on the Search "page"
    - The searchSlice.js manages:
        1. The address query inputted by the user on the Search "page"
        2. Units for the search radius - in kilometers or miles
        3. Search radius set by the user on the slider
        4. Check-in date
        5. Check-out date
        6. Location coordinates (latitude, longitude) for the search address
        7. Hotel API token is saved into the store
        8. Hotel information received from the API is saved
        9. Hotel rates received from the API are saved
        10. Loading progress every time Axios gets hotel information data per each hotel
        11. Resets the state to allow the user to navigate to the Search "page" and search again

### Improvements to be implemented
- [_] The Hotel Blog component appears to get all the data from the API on the first scroll to a new page
- [_] How can we ensure the user can't see in the code the Oauth2 login credentials, i.e. "API ID" and "API secret"?
- [_] What are the security implications of saving an Oauth2 bearer token into the state? Should it be saved into the state? 
- [_] Use JavaScript in JSX file to change the font colour for the sections in the desktop navbar depending on which section of the website is currently displayed by the viewport. 
- [_] Add memoisation functions to all API calls.
- [_] Improve validation logic in the Contacts "page", e.g. using the Joi validation library
- [_] Simplify CSS files. 

---

## Code structure

### JSX
- App.jsx and main.jsx control the React application.
- Supplemented by the above-described functional components.
- Indentation and comments are used throughout to explain the code. 

### SCSS / CSS
- Top-level stylesheet index.css
    1. The stylesheet index.css is the top-level stylesheet controlling the React application's styles.
- Individual CSS and SCSS stylesheets have been created on an as-needed basis per individual components:
    2. Blog.css
    3. Contacts.css
    4. Landing.css
        5. Loading.css
        6. Output.css
    7. Menu.scss
    8. NewsItem.css
    9. Reviews.css
- Shared functional component stylesheets:
    10. Navbar.css
    11. ParallaxCard.scss

