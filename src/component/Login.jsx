import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./LoginSignup.css"
import api from "../data/api";
import login from "../redux/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate(); 
        
        const onSubmit = async (data) => {
            try {
                const response = await api.post('/login', {
                    email: data.email,
                    password: data.password,
                });
                document.cookie = `jwtToken=${response.data.token}; Path=/; HttpOnly`; 
                
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    // Handle successful login, e.g., store token, redirect, etc.
                    // dispatch(login(response.data.user)); 
                    // Reset form fields
                    reset();
    
                    // Redirect to another page (e.g., dashboard)
                    navigate('/');
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
                            <div className="relative bg-white bg-opacity-10 p-8 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg border border-opacity-30 border-white " style={{height:"600px", width:"550px"}}>
                                <div className="absolute inset-0 bg-white opacity-10 rounded-2xl filter blur-xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-6xl font-bold mb-6 text-center text-slate-700 drop-shadow-md mt-4">Login Form</h2>
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
                                                className="w-full text-black text-xl px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-opacity-70"
                                                placeholder="Enter your email"
                                            />
                                            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-2xl text-blue-950 font-semibold mb-2">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                {...register('password', {
                                                    required: 'Password is required',
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Password must be at least 6 characters long',
                                                    },
                                                })}
                                                className="w-full text-black text-xl px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-opacity-70"
                                                placeholder="Enter your password"
                                            />
                                            {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-36 text-2xl items-center bg-purple-400 text-blue-950 font-semibold py-6 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105 shadow-md" style={{marginTop:"35px", marginLeft:"35%"}}
                                        >
                                            Login
                                        </button>
                                    </form>
                                    <div className="flex justify-center">
                                    <Link to="/forgot-password" className="text-xl font-bold text-center cursor-pointer hover:text-purple-800" style={{marginTop:"35px"}}>Forgot Password?</Link>
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

export default Login;
{/* <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border-2 border-gray-400">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email*:</label>
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold">Password*:</label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter Password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                </div> */}
// import React, { useState } from 'react';
// import './LoginSignup.css'; // Import custom CSS

// const LoginSignup = () => {
//   const [isSignUpActive, setIsSignUpActive] = useState(false);

//   return (
//     <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
//       {/* Sign-Up Form */}
//       <div className="form-container sign-up-container">
//         <form className="bg-white h-full flex flex-col items-center justify-center px-10 text-center">
//           <h1 className="font-bold text-3xl mb-3">Create Account</h1>
//           <div className="flex space-x-3 my-4">
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className="text-sm mb-3">or use your email for registration</span>
//           <input type="text" placeholder="Name" className="mb-2 px-3 py-2 bg-gray-100 w-full rounded-lg" />
//           <input type="email" placeholder="Email" className="mb-2 px-3 py-2 bg-gray-100 w-full rounded-lg" />
//           <input type="password" placeholder="Password" className="mb-2 px-3 py-2 bg-gray-100 w-full rounded-lg" />
//           <button className="bg-red-500 text-white font-bold py-2 px-8 rounded-lg mt-4">Sign Up</button>
//         </form>
//       </div>

//       {/* Sign-In Form */}
//       <div className="form-container sign-in-container">
//         <form className="bg-white h-full flex flex-col items-center justify-center px-10 text-center">
//           <h1 className="font-bold text-3xl mb-3">Sign in</h1>
//           <div className="flex space-x-3 my-4">
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="bg-gray-200 p-2 rounded-full"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className="text-sm mb-3">or use your account</span>
//           <input type="email" placeholder="Email" className="mb-2 px-3 py-2 bg-gray-100 w-full rounded-lg" />
//           <input type="password" placeholder="Password" className="mb-2 px-3 py-2 bg-gray-100 w-full rounded-lg" />
//           <a href="#" className="text-sm text-blue-600 mb-4">Forgot your password?</a>
//           <button className="bg-red-500 text-white font-bold py-2 px-8 rounded-lg mt-4">Sign In</button>
//         </form>
//       </div>

//       {/* Overlay Panel */}
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className={`overlay-panel ${isSignUpActive ? 'overlay-left' : 'overlay-right'}`}>
//             <h1 className="font-bold text-3xl mb-3">{isSignUpActive ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
//             <p className="mb-6">
//               {isSignUpActive
//                 ? 'To keep connected with us please login with your personal info'
//                 : 'Enter your personal details and start your journey with us'}
//             </p>
//             <button
//               className="bg-transparent border border-white text-white font-bold py-2 px-8 rounded-lg"
//               onClick={() => setIsSignUpActive(!isSignUpActive)}
//             >
//               {isSignUpActive ? 'Sign In' : 'Sign Up'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
