import React from 'react';

const Navbar = (props) => {
    return (
        <section className='w-full h-20 flex items-center justify-between px-2 md:px-7 absolute z-[100]'>
             <h1 className='text-red-700 font-bold text-xl md:text-3xl'>NETFLIX</h1>
             <div>
                <button className='text-white pr-3'>Sign In</button>
                <button className='bg-red-700 text-white px-6 py-2 rounded-lg'>Sign Up</button>
             </div>
        </section>
    );
}

export default Navbar;