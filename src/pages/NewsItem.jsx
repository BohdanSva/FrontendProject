import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../assets/styles/newsItem.css';
import { selectNewsItems } from '../features/news/newsSlice';
import NotFound from './NotFound';

const newsItem = () => {
    // Hooks definitions
    const newsItems = useSelector(selectNewsItems);
    
    // newsSlug path configuration
    const { newsSlug } = useParams();
    if (!newsItems[newsSlug]) return <NotFound/>;

    return ( 
    <>
    <div className="blog-single gray-bg text-start">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-8 m-15px-tb">
                    <article className="article">
                        <div className="article-img">
                            <img src={newsItems[newsSlug].mainImageURL} style={{width: '100%'}} title={newsItems[newsSlug].headline} alt={newsItems[newsSlug].mainImageAlt}/>
                        </div>
                        <div className="article-title">
                            <h6><a href="#">{newsItems[newsSlug].articleTopic}</a></h6>
                            <h2> {newsItems[newsSlug].headline} </h2>
                            <div className="media" style={{display: 'flex'}}>
                                <div className="avatar">
                                    <img src={newsItems[newsSlug].journoImageURL} title="" alt=""/>
                                </div>
                                <div className="media-body">
                                    <label>{newsItems[newsSlug].journoName}</label>
                                    <span>{newsItems[newsSlug].articleDate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>{newsItems[newsSlug].textBlock1}</p>
                            <h4>{newsItems[newsSlug].subheading}</h4>
                            <p>{newsItems[newsSlug].textBlock2}</p>
                            <blockquote>
                                <p>{newsItems[newsSlug].quote}</p>
                                <p className="blockquote-footer"><cite title="Source Title">{newsItems[newsSlug].quoteFrom}</cite></p>
                            </blockquote>
                            <p>{newsItems[newsSlug].textBlock3}</p>
                        </div>
                        <div className="nav tag-cloud">

                        {/* Map over all article tags and add them as anchors */}
                        {newsItems[newsSlug].articleTags.map((item, index) => {
                        return <a key={index} href="#">{item}</a>; 
                        })}

                        </div>
                    </article>
                </div>
                <div className="col-lg-4 m-15px-tb blog-aside">
                    {/* <!-- Author --> */}
                    <div className="widget widget-author">
                        <div style={{display: 'flex'}} className="widget-title">
                            <h3>Author</h3>
                        </div>
                        <div className="widget-body">
                            <div style={{display: 'flex'}} className="media align-items-center">
                                <div className="avatar">
                                    <img src={newsItems[newsSlug].journoImageURL} title="" alt=""/>
                                </div>
                                <div className="media-body">
                                    <h6>{newsItems[newsSlug].journoName}</h6>
                                </div>
                            </div>
                            <p>{newsItems[newsSlug].journoAbout}</p>
                        </div>
                    </div>
                    {/* <!-- End Author --> */}
                    {/* <!-- Trending Post --> */}
                    <div className="widget widget-post">
                        <div className="widget-title">
                            <h3>Trending Now</h3>
                        </div> 
                        <div className="widget-body">
                            I really want to connect this to a news service API.
                        </div>
                    </div>
                    {/* <!-- End Trending Post --> */}
                    {/* <!-- Latest Post --> */}
                    <div className="widget widget-latest-post">
                        <div className="widget-title">
                            <h3>Latest Post</h3>
                        </div>
                        <div className="widget-body">
                            <div className="d-flex latest-post-aside media">
                                <div className="lpa-left media-body">
                                    <div className="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div className="lpa-meta">
                                        <a className="name" href="#"></a>
                                        <a className="date" href="#">6th November 2022</a>
                                    </div>
                                </div>
                                <div className="lpa-right">
                                    <a href="#">
                                        <img src="" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Latest Post --> */}
                    {/* <!-- widget Tags --> */}
                    <div className="widget widget-tags">
                        <div className="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div className="widget-body">
                            <div className="nav tag-cloud">
                                <a href="#">Hotels</a>
                                <a href="#">Business</a>
                                <a href="#">Management</a>
                                <a href="#">Data</a>
                                <a href="#">Travel</a>
                                <a href="#">Paris Hilton</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End widget Tags --> */}
                </div>
            </div>
        </div>
    </div>

    </>
    );
}
 
export default newsItem



// const [newsArticleId, setNewsArticleId] = React.useState(null);
// const { newsSlug } = useParams();

// React.useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${newsSlug}`)
//     .then((res) => res.json())
//     .then((data) => setNewsArticleId(data));
// }, [newsSlug]);

// if (!newsArticleId) return null;

// return (
//     <>
//     <p>Test</p>
//     <h1>{newsArticleId.title}</h1>
//     <p>{newsArticleId.body}</p>
//     <p>{newsItems[newsSlug][1].headline}</p>
//     </>
// )
