import React from 'react';
import '../assets/styles/loading.css';

const Loading = () => {

    return (
        <>

        <header>
        <h1 className="text-center mt-5 mb-5"> This is the loading page </h1>
        </header>

        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </>
    );
}
 
export default Loading;
