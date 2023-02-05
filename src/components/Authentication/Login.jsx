import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/Logo - White.png'
const Login = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen max-h-fit w-screen bg-[#252b42] p-10 md:py-10 h-screen sm:py10'>
                <div className=' flex rounded-xl bg-[#fff] w-[60%] shadow-[0_0_10px_#00000080]'>
                    <div className='bg-[#295C7Acc] rounded-l-xl p-3 w-1/2'>
                        <img src={logo} className='h-5/6 w-full' alt='Pandulipi logo' />
                    </div>
                    <div className='flex flex-col items-center p-4 pt-8 w-1/2'>
                        <span class="self-center text-5xl font-semibold whitespace-nowrap dark:text-[#295C7A]">Pandulipi</span>
                        <h1 className='text-center text-3xl p-10 font-semibold '>Login to your account</h1>
                        <div className='flex flex-col gap-5 items-center'>
                            <div className='relative'>
                                <div className='absolute top-[-8px] left-[-.75rem] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#295C7A" className="w-8 h-8 m-4">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>

                                </div>
                                <input autoComplete='off' type='email' placeholder='Enter your email' name='email' className='p-3 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-[25vw] focus:shadow-[0px_0px_4px_#295C7A78] outline-none' />

                            </div>
                            <div className='relative'>
                                <div className='absolute top-[5px] left-[.3rem]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#295C7A" className="w-8 h-8">
                                        <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" /></svg>
                                </div>
                                <input autoComplete='off' type='password' placeholder='Enter your password' name='password' className='p-3 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-[25vw] rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none' />
                            </div>
                            <div>
                                <NavLink className='text-lg font-medium text-[#295C7A]' to='/login' >Forget Password ?</NavLink>
                            </div>
                            <div>
                                <button type="submit" className="text-white py-1 px-6 text-2xl w-full bg-[#295C7A] hover:bg-[#252b42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                            </div>
                            <div>
                                <span className='text-xl font-medium'>Don't have an account? <NavLink to='/login' className='text-xl text-[#252b42] font-bold' >Sign Up</NavLink> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login