import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const Getstarted = () => {
   
   const {user} = useContext(UserContext);

   if (!user) {

      return (
         
         <div className='text-lg font-semibold w-8/12 mx-auto my-7 px-4 py-6 bg-slate-100 rounded-lg'>
            <p className='mb-4 text-center text-xl'>Login Is Mandatory</p>

            <p className='mb-5'>Go On Login Page !</p> <Link to="/login" className='text-blue-600 hover:underline'>Login </Link>Now
         </div>
      )
   }

   return (
      <>
         <div className='w-8/12 mx-auto my-7 px-4 py-6 bg-slate-100 rounded-lg'>
            <div className='bg-white px-4 py-4 rounded'>
               <h4 className='text-2xl text-center mb-4'>
                  Welcome to <span className='italic font-bold'><span className='text-slate-400'>code</span> <span className='text-red-500'>Master</span></span>
               </h4>
               <p className='text-lg text-slate-500'>Username: <span className='italic text-slate-700  font-semibold'>{user.username}</span>
                  
               </p>
            </div>
         </div>
      </>
   );
};

export default Getstarted;
