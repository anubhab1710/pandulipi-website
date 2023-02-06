import React from 'react'
import { NavLink } from 'react-router-dom';
import errorBg from '../assets/img/error.svg';
const Error = () => {
    return (
        <div className='w-full h-full flex items-center justify-center my-4 mb-8'>
            <div className='flex items-center'>
                <div className='flex flex-col '>
                    <img src={errorBg} alt='Something went wrong' />
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-center text-6xl p-5 text-[#ccc]'>Oops!!, <span className='font-semibold text-[#295C7A] '>Nothing</span> here </h1>
                        <p className='font-semibold '>The page you are looking for, doesn't exist</p>
                        <NavLink to='/' className='bg-[#295C7A] font-semibold text-white py-2 px-6 rounded'>Go Back</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error