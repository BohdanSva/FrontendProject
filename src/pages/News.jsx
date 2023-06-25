import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();
    const navigateMenu = () => navigate('/menu');
    
    return (
    <>
    
    <header>
    <h1 className="text-center mt-5 mb-5"> This is the news page </h1>
    </header>

    {/* Component grid cards / Bootstrap */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card h-100">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a short card.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    </div>

    {/* Submit button / Bootstrap style */}
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateMenu} className="btn btn-outline-primary" type="submit">Back to menu</button>
    </div>

    </>
    );
}
 
export default News;


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
