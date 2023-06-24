import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const navigateNews = () => navigate('/news');
    const navigateBlog = () => navigate('/blog');
    const navigateSearch = () => navigate('/search');
    const navigateReviews = () => navigate('/reviews');
    const navigateContacts = () => navigate('/contacts');

    return (
    <>

    <header>
    <h1 className="text-center mt-5 mb-5"> This is the menu page </h1>
    </header>

    {/* Submit buttons / Bootstrap style */}
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateNews} className="btn btn-outline-primary" type="submit">News</button>
    </div>
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateBlog} className="btn btn-outline-primary" type="submit">Blog</button>
    </div>
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateSearch} className="btn btn-outline-primary" type="submit">Search</button>
    </div>
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateReviews} className="btn btn-outline-primary" type="submit">Reviews</button>
    </div>
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateContacts} className="btn btn-outline-primary" type="submit">Contacts</button>
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
