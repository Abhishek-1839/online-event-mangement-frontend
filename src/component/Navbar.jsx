import React, { useState, useEffect } from 'react';
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);


    // useEffect(() => {
    //     // Check if user is logged in
    //     const checkAuthStatus = () => {
    //         const token = localStorage.getItem('token'); // Assuming you store the auth token in localStorage
    //         setIsLoggedIn(!!token);
    //     };

    //     checkAuthStatus();
    //     // You might want to set up a listener for auth state changes here
    // }, []);


    const handleClick = () => {
        navigate('/eventschedule')
    }

    const handleEvent = () => {
        navigate('/eventform')
    }
 const handleauth = () => {
    if (isLoggedIn) {
        // Logout logic
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/'); // Redirect to home page after logout
    } else {
        navigate('/auth');
    }
    };

    return (
        <nav className=" bg-red-600 text-white py-3 px-6 flex items-center justify-between h-24">
            {/* Left section: Logo */}
            <div className="flex items-center space-x-4">
                <Link to="/" className="font-bold text-3xl">LeisureBookings.in</Link>
            </div>
            {/* Right section: Options */}
            <div className="flex items-center space-x-4">
                <button className="text-xl px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition" onClick={handleClick}>Event Schedules</button>
                <button className="text-xl px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition" onClick={handleEvent}>
                    Add your event
                </button>
                <button className="text-xl px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition" onClick={handleauth}>
                    {isLoggedIn ? 'Logout' : 'Login/Register'}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
