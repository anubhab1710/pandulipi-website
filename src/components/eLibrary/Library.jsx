import React from 'react'
// import { Routes, Route } from "react-router-dom";
import Magazine from './Magazine'
import Books from './Books'
import './library.css';


const Library = () => {
  return (
    <div id='canvas'>
      <h1 className='text-center text-5xl p-10 text-[#fff]'>E-Library</h1>
      <Magazine />
      <Books />
    </div>

)
}

export default Library