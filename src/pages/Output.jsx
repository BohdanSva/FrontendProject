import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectHotelInfo, selectHotelRates, selectCheckin, selectCheckout, reset } from "../features/search/searchSlice";
import '../assets/styles/output.css';

const Output = () => {
    // Hooks definitions
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkin = useSelector(selectCheckin);
    const checkout = useSelector(selectCheckout);
    const hotelInfo = useSelector(selectHotelInfo);
    const hotelRates = useSelector(selectHotelRates);

    const handleClick = () => {
        dispatch(reset()); // Reset the search state so that the search doesn't start before user inputs new values
        navigate('/search'); // Go to search
    };

    if (!hotelInfo) return <h1>No search request provided</h1>; // Don't run the below code if no search was initiated by user

    // Calculate the number of days between check-in and check-out
    const checkinDate = new Date(checkin); // Convert string to date object
    const checkoutDate = new Date(checkout);
    const days = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 3600 * 24); 

    return (
    <>

    <header>
    <h1 className="text-center mt-5 mb-5"> Search results </h1>
    </header>

    <p>Results for stay from&nbsp;
        {checkinDate.toLocaleDateString("en-GB", {dateStyle: "long"})}&#8202;
        to&nbsp;
        {checkoutDate.toLocaleDateString("en-GB", {dateStyle: "long"})}</p>

    <div className="output-table">
        <table className="table align-middle table-responsive">
            <thead className='align-middle'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Hotel name</th>
                    <th scope="col">City</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Average price / day</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Number of beds</th>
                    <th scope="col">Bed type</th>
                </tr>
            </thead>
            <tbody>
            {hotelRates.map((item, key) => {
                return (               
                    <tr key={key}>
                        <td scope="row">{key+1}</td>
                        <td scope="row">{item[0].hotel.name}</td>
                        <td scope="row">{item[0].hotel.cityCode}</td>
                        <td scope="row">{Math.floor(item[0].offers[0].price.total)}</td>
                        <td scope="row">{Math.floor(item[0].offers[0].price.total/days)}</td>
                        <td scope="row">{item[0].offers[0].price.currency}</td>
                        <td scope="row">{item[0].offers[0].room.typeEstimated.beds}</td>
                        <td scope="row">{item[0].offers[0].room.typeEstimated.bedType}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>

    
    {/* Submit button / Bootstrap style */}
    <div className="col align-items-center" style={{marginTop: '7em'}}>
        <button onClick={handleClick} className="btn btn-outline-primary btn-lg" type="submit"> Back to Search Engine </button>
    </div>

    </>
    );
}
 
export default Output;
