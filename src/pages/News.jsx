import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectNewsItems, setNewsItems } from '../features/news/newsSlice';
import '../assets/styles/parallaxCard.scss';
import news2Image from '../assets/images/news/news2.jpg';
import news3Image from '../assets/images/news/news3.jpg';

const News = () => {
    // Hooks definitions
    const dispatch = useDispatch();
    let newsItems = useSelector(selectNewsItems);

    // Sort function
    let dataCopy = useSelector(selectNewsItems); // Create a copy of the data JSON to be sorted
    let tempNewsItems = []; // Create an array to allow sort
    for (const item in dataCopy) { // Populate the array with pairs of the key for sorting, as tempSortId, and the data
        let obj = {};
        obj.tempSortId = dataCopy[item].articleDate; // tempSortId = articleDate property
        obj[item] = dataCopy[item]; // one data item from JSON
        tempNewsItems.push(obj);
    }
    tempNewsItems.sort((a, b) => { // Sort function
        return new Date(b.tempSortId.date) - new Date(a.tempSortId.date);
    }).reverse();
    let sortedNewsItems = []; // Delete tempSortId and simplify array
    for (let i=0; i < tempNewsItems.length; i++) {
        let obj = tempNewsItems[i];
        delete obj.tempSortId;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var id = prop;
            }
        }
        let item = obj[id];
        sortedNewsItems.push(item);
    }
    newsItems = sortedNewsItems;
    console.log(newsItems);
    // dispatch(setNewsItems(newsItems)); // THROWS ERROR

    let dateCopy = newsItems; // Create a copy
    for (const item in dateCopy) { // Populate the array with pairs of the key for sorting, as tempSortId, and the data
        let dateString = dateCopy[item].articleDate;
        const dateMomentObject = moment(dateString, "DD/MM/YYYY"); // 1st argument - string, 2nd argument - format
        const dateObject = dateMomentObject.toDate(); // convert Moment object to Date object
        dateCopy.push(dateObject);

        // Object.keys(dateCopy).forEach(function(articleDate) {
        //     dateCopy[articleDate] = dateObject;
        // })

    }
    console.log(Object.getOwnPropertyNames(dateCopy));
    console.log(dateCopy);

    // Convert string DD/MM/YYYY date format that JS doesn't understand into JS Date objects, using the Moment library
    // for (const item in newsItems) { 
    //     let dateString = newsItems[item].articleDate;
    //     const dateMomentObject = moment(dateString, "DD/MM/YYYY"); // 1st argument - string, 2nd argument - format
    //     const dateObject = dateMomentObject.toDate(); // convert Moment object to Date object
        
    //     // console.log(dateString);

    // }

    // let rows = [
    //     {id: 11, active: 'no'},
    //     {id: 22, active: 'yes'},
    //     {id: 33, active: 'no'},
    //     {id: 44, active: 'no'}
    // ]

    // let new_item = {id: 22, active:'yeah'};

    // const indexOfItemInArray = rows.findIndex(q => q.id === new_item.id);
    // rows.splice(indexOfItemInArray, 1, new_item);

    // console.log(rows);   





    // var dateString = newsItems[0].articleDate
    // var dateMomentObject = moment(dateString, "DD/MM/YYYY"); // 1st argument - string, 2nd argument - format
    // var dateObject = dateMomentObject.toDate(); // convert moment.js object to Date object
    // console.log(dateObject);

    // console.log(newsItems[0].articleDate)
    // const date = new Date(newsItems[0].articleDate);
    // console.log(date);

    return (
    <>
    <header>
    <h1 className="text-center mt-5 mb-5"> Latest Hotel News </h1>
    </header>

    {/* Component grid cards / Bootstrap */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
        
    <div className="col">
        <a href="/news/1">
        <p className="card-text" style={{color: 'black'}}>{new Date(newsItems[0].articleDate).toLocaleString("en-UK", {day: "numeric", month: "long", year: "numeric"})}</p>
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
                        <img src={newsItems[0].mainImageURL} className="card-img-top" alt={newsItems[0].mainImageAlt}/>
                    <div className="card-body">
                    <h5 className="card-title">{newsItems[0].headline}</h5>
                        <p className="card-text">{newsItems[0].textBlock1}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </a>
    </div>
    <div className="col">
        <a href="/news/2">
            <p className="card-text" style={{color: 'black'}}>{new Date(newsItems[1].articleDate).toLocaleString("en-UK", {day: "numeric", month: "long", year: "numeric"})}</p>
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
                        <img src={newsItems[1].mainImageURL} className="card-img-top" alt={newsItems[1].mainImageAlt}/>
                    <div className="card-body">
                    <h5 className="card-title">{newsItems[1].headline}</h5>
                        <p className="card-text">{newsItems[1].textBlock1}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </a>
    </div>
    <div className="col">
        <a href="/news/3">
            <p className="card-text" style={{color: 'black'}}>{new Date(newsItems[2].articleDate).toLocaleString("en-UK", {day: "numeric", month: "long", year: "numeric"})}</p>
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
                        <img src={newsItems[2].mainImageURL} className="card-img-top" alt={newsItems[2].mainImageAlt}/>
                    <div className="card-body">
                    <h5 className="card-title">{newsItems[2].headline}</h5>
                        <p className="card-text">{newsItems[2].textBlock1}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </a>
    </div>

    </div>

    </>
    );
}
 
export default News;