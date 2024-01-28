import React, { useState } from 'react';
import { Logo, Toast } from "../index.js";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../services/authService.js';
import { useDispatch } from 'react-redux';
import { login } from '../../slicer/authSlicer.js';


function SignUp() {


    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState("");
    const [msgType, setMsgType] = useState("success");
    
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleButtonClick = () => {
    //     setShowToast(true);
    // };

    const handleCloseToast = () => {

        setShowToast(false);
    };


    // Object.keys(data).length


    const create = async (data) => {

        try {

            const userData = await authService.createAccount(data);

            if(userData) {

                const currentUserData = await authService.getCurrentUser();

                if(currentUserData) {

                    dispatch(login(currentUserData));                
                }
                else {

                    navigate("/");
                }
            }
            
        } catch (error) {
            
            setShowToast(true);
            setMsg(error.message);
            setMsgType("error");
        }

    }


    return (
    <>
        
        <div>
            {showToast && (
                <Toast  
                    message={msg}
                    type={msgType}
                    onClose={handleCloseToast}
                />
            )}
        </div>

        <div className='w-[500px] m-auto my-8 p-10 rounded-2xl bg-zinc-100'>
            <div className='flex items-center justify-center'>
                <Logo textSize={"text-2xl"}/>
            </div>

            <div className='text-center'>
                <h2 className='text-2xl mt-3'>Welcome to Pinterest</h2>
                <p className='text-zinc-600'>Find new ideas to try</p>
            </div>

            <div className='mt-2 px-6 py-4 text-gray-700 bg-white rounded-xl'>
                <div className='flex flex-wrap flex-col'>
                    <form onSubmit={handleSubmit(create)}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" {...register("userName", {required: true,})} id='username' placeholder='Enter your username' 
                            className='w-full mb-4 px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-sky-500'
                            />
                        </div>
                        <div>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" {...register("fullName", {required: true,})} id='fullname' placeholder='Enter your fullname' 
                            className='w-full mb-4 px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-sky-500'
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email-id</label>
                            <input type="email" {...register("email", {required: true, validate: { matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }})} id='email' placeholder='Enter your email-id' 
                            className='w-full mb-4 px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-sky-500'
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" {...register("password", {required: true,})} id='password' placeholder='Enter your password' 
                            className='w-full mb-6 px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-sky-500'
                            />
                        </div>
                        <div>
                            <p className='mb-6'>Already have an account? <Link to="/login" className='text-blue-600'>Login Now</Link></p>
                        </div>
                        <div>
                            <button type='submit' className='w-full bg-red-600 text-white text-lg px-4 py-2 rounded-xl hover:bg-red-700 '>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </>
    );
}

export default SignUp;