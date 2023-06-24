import React from 'react';
import { useNavigate } from 'react-router-dom';

const Output = () => {
    const navigate = useNavigate();
    const navigateMenu = () => navigate('/menu');
    

    //If waiting for data, show loading screen
    if (!dataNameTBD) return <h1>Loading</h1>; 

    return (
    <>

    <header>
    <h1 className="text-center mt-5 mb-5"> This is the ouptut page </h1>
    </header>

    {/* Submit button / Bootstrap style */}
    <div className="d-grid gap-2 col-3 mx-auto mb-3">
        <button onClick={navigateMenu} className="btn btn-outline-primary" type="submit">Back to menu</button>
    </div>

    </>
    );
}
 
export default Output;
