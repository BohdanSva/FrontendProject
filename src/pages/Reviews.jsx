import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReviewHeader from '../components/ReviewHeader';
import ReviewList from '../components/ReviewList';
import ReviewStats from '../components/ReviewStats';
import ReviewForm from '../components/ReviewForm';

import ProductData from '../features/reviews/ProductData'; // Import data from file

import '../assets/styles/reviews.css';

const Reviews = () => {
    const [review, setReview] = useState(ProductData); // Gets review data from file

    const addReview = newReview => {
        newReview.id = uuidv4();
        setReview([newReview, ...review]);
    };

    const deleteFeedback = id => { // Confirmation on delete
        if (window.confirm('Are you sure you want to delete?')) {
          setReview(review.filter(item => item.id !== id));
        }
    };
    
    return (
    <>
        <ReviewHeader />
        <div className="container">
            <ReviewForm handleAdd={addReview}/>
            <ReviewStats review={review} />
            <ReviewList review={review} handleDelete={deleteFeedback}/>
        </div>



    {/* Review Form / Material Design for Bootstrap */}
    {/* <section>
        
    <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
        <h3 className="mb-4">Read what our customers say</h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
            quisquam eum porro a pariatur veniam.
        </p>
        </div>
    </div>

    <div className="row text-center">
        <div className="col-md-4 mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3">Maria Smantha</h5>
        <h6 className="text-primary mb-3">Web Developer</h6>
        <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
            tenetur.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star-half-alt fa-sm text-warning"></i>
            </li>
        </ul>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3">Lisa Cudrow</h5>
        <h6 className="text-primary mb-3">Graphic Designer</h6>
        <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
        </ul>
        </div>
        <div className="col-md-4 mb-0">
        <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            className="rounded-circle shadow-1-strong" width="150" height="150" />
        </div>
        <h5 className="mb-3">John Smith</h5>
        <h6 className="text-primary mb-3">Marketing Specialist</h6>
        <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
            <i className="far fa-star fa-sm text-warning"></i>
            </li>
        </ul>
        </div>
    </div>

    </section>*/}

    </> 
    );
}
 
export default Reviews;