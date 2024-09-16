import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        navigate('/eventschedule');
        setIsMenuOpen(false);
    }

    const handleEvent = () => {
        navigate('/eventform');
        setIsMenuOpen(false);
    }

    const handleauth = () => {
        if (isLoggedIn) {
            localStorage.removeItem('token');
            dispatch(logout());
            navigate('/');
        } else {
            navigate('/auth');
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-red-600 text-white py-4 px-4 md:py-3 md:px-6">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="font-bold text-2xl md:text-3xl">LeisureBookings.in</Link>

                {/* Hamburger menu for mobile */}
                <button 
                    className="lg:hidden md:flex sm:flex focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop menu */}
                <div className="lg:flex md:hidden sm:hidden hidden items-center space-x-4">
                    <NavButton onClick={handleClick}>Event Schedules</NavButton>
                    <NavButton onClick={handleEvent}>Add your event</NavButton>
                    <NavButton onClick={handleauth}>
                        {isLoggedIn ? 'Logout' : 'Login/Register'}
                    </NavButton>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mt-4 md:flex flex-col">
                    <NavButton className="block w-full mb-2" onClick={handleClick}>Event Schedules</NavButton>
                    <NavButton className="block w-full mb-2" onClick={handleEvent}>Add your event</NavButton>
                    <NavButton className="block w-full mb-2" onClick={handleauth}>
                        {isLoggedIn ? 'Logout' : 'Login/Register'}
                    </NavButton>
                </div>
            )}
        </nav>
    );
};

// Reusable NavButton component
const NavButton = ({ children, className = "", ...props }) => (
    <button 
        className={`text-lg px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-red-600 transition ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Navbar;