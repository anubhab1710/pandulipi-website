import React, { useState } from 'react'
import { Routes, NavLink, Route } from "react-router-dom";
import Album1 from './Album1';
import Album2 from './Album2';
import Album3 from './Album3';
import './style.css';


const Gallery = () => {
    return (
        <div id='canvas'>
            <h1 className='text-center text-5xl p-10 text-[#fff]'>Events Gallery</h1>
            <div id="navigation" className='flex flex-wrap gap-20  justify-center mt-3'>
                {/* <NavLink className='album_name text-center' to='./album1'>Album - 1</NavLink>
                <NavLink className='album_name text-center' to='./album2'>Album - 2</NavLink>
                <NavLink className='album_name text-center' to='./album3'>Album - 3</NavLink> */}
            </div>

            <Routes>
                <Route exact path="/" element={<Album1 />} />
                <Route exact path="/album1" element={<Album1 />} />
                <Route exact path="/album2" element={<Album2 />} />
                <Route exact path="/album3" element={<Album3 />} />
            </Routes>
            <div className='p-5' />

        </div>

    )
}


export default Gallery