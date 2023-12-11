import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
   return (
   <>
      <header className="shadow sticky bg-white z-50 top-0">
         
         <nav className="bg-white-100 border-gray-300 px-5 lg:px-6 py-2.5 flex justify-around items-center">
            <div>
               <Link to='/' className='text-4xl font-bold italic'><span className='text-slate-500'>code</span> <span className='text-red-600'>Master</span></Link>
            </div>

            <div className=''>
               <ul className='flex space-x-8'>
                  <li>
                     <NavLink to="/" className={({isActive}) => `text-xl font-medium transition-colors ease-in-out hover:text-red-500 ${isActive ? "text-red-500" : "text-black"}`}>Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="about" className={({isActive}) => `text-xl font-medium tracking-wide transition-colors hover:text-red-500 ${isActive ? "text-red-500" : "text-black"}`}>About</NavLink>
                  </li>
                  <li>
                     <NavLink to="contactUs" className={({isActive}) => `text-xl font-medium tracking-wide transition-colors hover:text-red-500 ${isActive ? "text-red-500" : "text-black"}`}>Contact Us</NavLink>
                  </li>
                  <li>
                     <NavLink to="github" className={({isActive}) => `text-xl font-medium tracking-wide transition-colors hover:text-red-500 ${isActive ? "text-red-500" : "text-black"}`}>Github</NavLink>
                  </li>
               </ul>
            </div>
            <div className='flex space-x-6'>
               <div className='btn rounded bg-blue-600 px-4 py-1 tracking-wide transition-all ease-in delay-150 hover:bg-slate-900'>
                  <Link to="login" className='text-white text-lg font-medium'>Login</Link>
               </div>
               <div className='btn rounded bg-blue-600 px-4 py-1 tracking-wide transition-all ease-in delay-150 hover:bg-slate-900'>
                  <Link to="getStarted" className='text-white text-lg font-medium'>Get Started</Link>
               </div>
            </div>
         </nav>

      </header>
   </>
   );
}

export default Header;
