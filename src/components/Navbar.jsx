import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/img/Logo-Black.svg"

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 drop-shadow-2xl">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="" className="flex items-center">
                    <img src={Logo} className="m-2 mr-4 h-14 w-14 rounded-full dark:bg-white" alt="Pandulipi Logo" />
                    <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-white">Pandulipi</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul className="flex flex-col md:items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }} >About</NavLink>

                        </li>
                        <li>
                            <NavLink to="/gallery" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }}>Events Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }}>Blog Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/elibrary" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }}>eLibrary</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => isActive ? { color: '#00B8FF ', fontWeight: 'bold' } : { color: 'white', fontWeight: 'normal' }}>Team</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className="inline-block mt-3 md:mt-0 md:ml-10 mr-[-20px] px-6 py-2.5 bg-blue-600 text-white font-bold text-sm md:text-base leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup' className="inline-block mt-3 md:mt-0 px-6 py-2 border-2 border-blue-600 text-blue-300 font-bold text-sm md:text-base leading-tight uppercase rounded hover:bg-blue-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar