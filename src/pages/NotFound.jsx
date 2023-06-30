import React from 'react';
import notFoundImage from '../assets/images/notfound/pagenotfound.jpg';

const NotFound = () => {
    return (
    <>
        <h1 style={{marginBottom: '1em'}}> Page not found - you're out of your depth! </h1>
        <div className="card h-100">
            <img src={notFoundImage}/>
        </div>
    </>
    );
};
 
export default NotFound;
