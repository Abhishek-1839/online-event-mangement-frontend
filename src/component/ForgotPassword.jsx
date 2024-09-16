import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginSignup.css"
import api from "../data/api";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await api.post('/forgot-password', {
                email: data.email
            });
            
            if (response.status === 200) {
                // Handle successful login, e.g., store token, redirect, etc.
                console.log("forgot password request successful", response.data);

                // Reset form fields
                reset();

                // Redirect to another page (e.g., dashboard)
                navigate(`/login`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            // Optionally, handle error (show error message, etc.)
        }
    };

    return (
        <>
            <div
                className="flex justify-center items-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517707711963-adf9078bdf01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
            >
                <div>
                   
                    
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="w-full max-w-md">
                            <div className="relative bg-white bg-opacity-10 p-8 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg border border-opacity-30 border-white " style={{height:"450px", width:"550px"}}>
                                <div className="absolute inset-0 bg-white opacity-10 rounded-2xl filter blur-xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold mb-6 text-center text-slate-700 drop-shadow-md mt-4">Forgot Password</h2>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-2xl text-blue-950 font-semibold mb-2 mt-10">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: 'Email is invalid',
                                                    },
                                                })}
                                                className="w-full px-4 py-3 text-black text-xl bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500  placeholder-opacity-70"
                                                placeholder="Enter your email"
                                            />
                                            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
                                        </div>

                                       

                                        <button
                                            type="submit"
                                            className="w-72 text-xl items-center bg-purple-400 text-blue-950 font-semibold py-6 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md" style={{marginTop:"75px", marginLeft:"20%"}}
                                        >
                                            Send Reset Password Link
                                        </button>
                                    </form>
                                    <div className="flex justify-center">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;