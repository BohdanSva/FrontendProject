import React from 'react';
import { useNavigate } from 'react-router-dom';
import newsImage from "../assets/images/menu/news.jpg";
import blogImage from "../assets/images/menu/blog.jpg";
import searchImage from "../assets/images/menu/search.jpg";
import reviewsImage from "../assets/images/menu/reviews.jpg";

const Menu = () => {
    const navigate = useNavigate();
    const navigateNews = () => navigate('/news');
    const navigateBlog = () => navigate('/blog');
    const navigateSearch = () => navigate('/search');
    const navigateReviews = () => navigate('/reviews');
    const navigateContacts = () => navigate('/contacts');

    return (
    <> 
    {/* Component cards / Bootstrap */}
    <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
        <img src={newsImage} className="card-img-top img-responsive" alt="news image"/>
        <div className="card-body">
            <h5 className="card-title">News Feed</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>          
            <a onClick={navigateNews} className="btn btn-primary">See latest news</a>
        </div>
        </div>
    </div>
    <div className="col-sm-6">
        <div className="card">
        <img src={blogImage} className="card-img-top img-responsive" alt="blog image"/>
        <div className="card-body">
            <h5 className="card-title">Hotel Blog</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a onClick={navigateBlog} className="btn btn-primary">Enter the blogosphere</a>
        </div>
        </div>
    </div>
    </div>

    <div className="row">
    <div className="mb-3 mb-sm-0 mt-3">
        <div className="card">
        <div className="card-body">
            <h1 className="card-title animate__animated animate__zoomInDown"> Hotel Pricing Engine </h1>
            <p className="card-text"> Compare hotel prices by geolocation </p>
        </div>
        </div>
    </div>
    </div>

    <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <div className="card">
        <img src={searchImage} className="card-img-top img-responsive" alt="blog image"/>
        <div className="card-body">
            <h5 className="card-title">Search</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a onClick={navigateSearch} className="btn btn-primary"> Enter hotel search engine </a>
        </div>
        </div>
    </div>
    <div className="col-sm-6 mt-3">
        <div className="card">
        <img src={reviewsImage} className="card-img-top img-responsive" alt="blog image"/>
        <div className="card-body">
            <h5 className="card-title">Reviews</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a onClick={navigateReviews} className="btn btn-primary">Explore product reviews</a>
        </div>
        </div>
    </div>
    </div>

    <div className="row">
    <div className="mb-3 mb-sm-0 mt-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Contacts</h5>
            <a onClick={navigateContacts} className="btn btn-primary">Contact us</a>
        </div>
        </div>
    </div>
    </div>

    </>
    );
};
 
export default Menu;



// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementByAmount(incrementValue))}
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(incrementValue))}
//         >
//           Add Async
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementIfOdd(incrementValue))}
//         >
//           Add If Odd
//         </button>
//       </div>
//     </div>
//   );
// }
