import React from 'react';
import { useSelector } from "react-redux";
import { selectNewsItems } from '../features/news/newsSlice';
import '../assets/styles/parallaxCard.scss';

const News = () => {
    // Hooks definitions
    const newsItems = useSelector(selectNewsItems); // This is already sorted data taken from the store

    return (
    <>
    <header>
    <h1 className="text-center mt-5 mb-5"> Latest Hotel News </h1>
    </header>

    {/* Component grid cards / Bootstrap */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
        
    {/* Map over the sorted newsItems to render news cards */}
    {newsItems.map((item, index) => {
        return(
            <div key={index} className="col">
            <a href={`/news/${newsItems.indexOf(item)}`}>
                <p className="card-text" style={{color: 'black'}}>{new Date(item.articleDate).toLocaleString("en-UK", {day: "numeric", month: "long", year: "numeric"})}</p>
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
                                <img src={item.mainImageURL} className="card-img-top" alt={item.mainImageAlt}/>
                            <div className="card-body">
                            <h5 className="card-title">{item.headline}</h5>
                                <p className="card-text">{item.textBlock1}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    })}

    </div>

    </>
    );
}
 
export default News;