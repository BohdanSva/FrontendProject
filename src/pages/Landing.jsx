import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/menu');

    return (
        <>

        <header>
        <h1 className="text-center mt-5 mb-5"> This is the landing page </h1>
        </header>

        {/* Submit button / Bootstrap style */}
        <div className="d-grid gap-2 col-3 mx-auto mb-3">
            <button onClick={handleClick} className="btn btn-outline-primary" type="submit">Go to menu page</button>
        </div>

        </>
    );
}
 
export default Landing;

// import '../../assets/styles/general.css';
