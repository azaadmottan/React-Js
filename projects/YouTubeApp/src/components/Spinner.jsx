import React from 'react'

function Spinner() {
        
    return (
    <>
        <div className='fixed top-0 flex min-w-full min-h-screen items-center justify-center'>
            <div className='w-20 h-20 border-2 border-white rounded-full animate-spin border-t-transparent'></div>
        </div>
    </>
    );
}

export default Spinner; 