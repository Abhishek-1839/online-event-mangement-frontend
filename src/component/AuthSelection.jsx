import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSelection = () => {
    const navigate = useNavigate();

    return (
        <>
                <div
                    className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl bg-gray-200">
                        <div className="flex items-center justify-center min-h-screen ">
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border w-max h-96">
                                <div className="absolute bg-white rounded-2xl filter"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold mb-6 text-center text-red-600 drop-shadow-md">
                                        Already a registered user?
                                    </h2>
                                    <p className="text-teal-800 text-center mb-8 text-2xl mt-5">
                                        If you already have an account, click the button below to log in.
                                    </p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => navigate('/login')}
                                            className="bg-red-600 text-xl text-white font-semibold mt-4 py-3 px-6 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center min-h-screen ">
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border w-max h-96">
                        <div className="absolute bg-white rounded-2xl filter"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold mb-6 text-center text-slate-700 drop-shadow-md">
                                    New to our platform?
                                    </h2>
                                    <p className="text-teal-900 text-center mb-8 text-2xl mt-20">
                                    If you don't have an account yet, click the button below to sign up.
                                    </p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => navigate('/register')}
                                            className="bg-red-600 text-xl text-white font-semibold mt-4 py-3 px-6 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
};


export default AuthSelection;
