import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectHotelInfo, selectHotelRates, selectLoadingProgress } from "../features/search/searchSlice";
import '../assets/styles/loading.css';

const Loading = () => {
    // Hooks definitions
    const navigate = useNavigate();
    const hotelInfo = useSelector(selectHotelInfo);
    const hotelRates = useSelector(selectHotelRates);
    let currentCount = useSelector(selectLoadingProgress);

    const totalCount = hotelInfo ? hotelInfo.meta.count : "many"; // once hotelInfo is received, set the total count

    const redirectPath = '/output'; 
    useEffect(() => {
        if(hotelInfo) {
            if(currentCount===totalCount){ // After Axios loaded data for all hotels within range, redirect to Output page
                navigate(redirectPath); 
            }
        }
    }, [currentCount]);

    return (
        <>

        <header>
        <h1 className="text-center" style={{marginBottom: '25%'}}> Searching hotels </h1>
        </header>

        <div style={{marginBottom: '20%'}}>
        <h3>Searching {currentCount} of {totalCount} hotels matching your criteria</h3>
        <h3>{Math.floor((currentCount/totalCount)*100)} %</h3>
        </div>

        <div className="lds-roller" style={{marginBottom: '65%'}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </>
    );
}
 
export default Loading;
