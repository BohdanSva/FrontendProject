import React from 'react';
import { useNavigate } from 'react-router-dom';

const Output = () => {
    const navigate = useNavigate();
    const navigateMenu = () => navigate('/menu');
    

    // hotelCode.meta.count
    // hotelCode.data[0].name
    // hotelCode.data[0].hotelId
    // hotelCode.data[0].geoCode.latitude
    // hotelCode.data[0].geoCode.longitude
    // hotelCode.data[0].distance.value
    // hotelCode.data[0].distance.unit

    // hotelRates.data[0].available
    // hotelRates.data[0].offers[0].price.currency
    // hotelRates.data[0].offers[0].price.variations.average


    //If waiting for data, show loading screen
    if (!dataNameTBD) return <h1>Loading</h1>; 

    return (
    <>

    <header>
    <h1 className="text-center mt-5 mb-5"> This is the output page </h1>
    </header>

    {/* Submit button / Bootstrap style */}
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateMenu} className="btn btn-outline-primary" type="submit">Back to menu</button>
    </div>

    </>
    );
}
 
export default Output;
