import React from 'react';
import config from '../config/config.js';

function Home() {

    return (
        <>
        <section className='mx-auto'>
            <section className='w-[100%] h-[90vh] px-[160px] py-[50px] flex gap-10 bg-amber-200'>
                <div className='w-[50%]'>
                <img alt="crispy chicken recipe" className='w-[65vh] h-[70vh]' src="https://s.pinimg.com/webapp/center-2d76a691.png" />
                </div>

                <div className='w-[50%]'>   
                    <h2 className='text-6xl text-pink-800 font-bold text-center mt-48'>Search for an idea</h2>

                    <p className='text-pink-600 mt-8 text-center w-[70%] m-auto text-xl'>What do you want to try next? Think of something you're into—like “easy chicken dinner”—and see what you find.</p>
                </div>
            </section>

            <section className='w-[100%] h-[95vh] px-[160px] py-[50px] flex gap-10 bg-teal-100'>

                <div className='w-[50%]'>   
                    <h2 className='text-6xl text-teal-800 font-bold text-center mt-48'>Save ideas you like</h2>

                    <p className='text-teal-600 mt-8 text-center w-[45%] m-auto text-xl'>Collect your favorite so you can get back to them later.</p>
                </div>

                <div className='w-[50%]'>

                <img alt="future home vibes couch" className='w-[65vh] h-[70vh]' src="https://s.pinimg.com/webapp/future-home2-31c812cc.png"></img>
                </div>
                
            </section>

            <section className='w-[100%] h-[95vh] px-[160px] py-[50px] flex bg-rose-200'>

                <div className='m-auto'>   
                    <h2 className='text-6xl text-rose-800 font-bold text-center mt-42'>See it, make it, try it, do it</h2>

                    <p className='text-rose-600 mt-8 text-center w-[45%] m-auto text-xl'>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                </div>
            </section>


            <section className='w-[100%] h-[90vh] text-white flex items-center justify-center bg-[url("https://wallpapers.com/images/featured/pinterest-background-urm1zdm2gj236gbq.jpg")] bg-cover bg-no-repeat object-contain bg-black bg-blend-color-burn bg-opacity-70'>

                <div className='w-[50%]'>
                    <h2 className='text-center leading-[90px] text-6xl font-semibold'>Sign up Now to get your ideas...</h2>
                </div>
                
            </section>
            
        </section>
        </>
    )
}

export default Home;