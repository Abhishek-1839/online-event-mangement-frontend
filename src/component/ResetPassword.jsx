import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import api from "../data/api";
import "./LoginSignup.css"

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState(null);
  
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (e) => {
        try {
            console.log(token);
            const response = await api.post(`/reset-password/${token}`, {
               newPassword,
            });
           
            if (response.status === 200) {
                setIsPasswordReset(true); // Show success message
                setMessage("Password reset successful. You can now log in with your new password.");
                reset(); // Clear the form
            }
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    const passwordprint = (e)=>{
        console.log(newPassword);
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
                            <div className="relative bg-white bg-opacity-10 p-8 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg border border-opacity-30 border-white " style={{ height: "450px", width: "550px" }}>
                                <div className="absolute inset-0 bg-white opacity-10 rounded-2xl filter blur-xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold mb-6 text-center text-slate-700 drop-shadow-md mt-4">Reset Password</h2>
                                   
                                   
                                   {!isPasswordReset ? ( 
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-xl text-blue-950 font-semibold mb-2">New Password</label>
                                            <input
                                                type="text"
                                                id="name" value={newPassword}
                                                {...register('name', { required: 'Password is required' })}
                                                className="w-full text-black text-xl px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-opacity-70"
                                                placeholder="Enter your new password" onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-72 text-xl bg-purple-400 text-blue-950 font-semibold py-6 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md"
                                            style={{ marginTop: "75px", marginLeft: "20%" }} onClick={passwordprint}
                                        >
                                            Reset Password
                                        </button>
                                    </form>
                                ) : (
                                     <div className="text-center">
                                    <p className="text-green-400 text-lg font-semibold mb-6">Password reset successfully!</p>
                                    <button
                                        onClick={() => navigate('/login')}
                                       className="w-72 text-xl bg-purple-400 text-blue-950 font-semibold py-6 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md"
                                       style={{ marginTop: "75px", marginLeft: "20%" }}
                                    >
                                        Go to Login
                                    </button>
                                </div>
                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;