import React from "react";
// import { Routes, Route } from "react-router-dom";
import Magazine from "./Magazine";
import Books from "./Books";
import "./library.css";

const Library = () => {
  return (
    <div id="canvas">
      <h1 className="text-center text-5xl p-10 text-[#fff]">E-Library</h1>
      <div className="flex flex-wrap justify-center mb-10">
        <a
          href="https://book-finder.onrender.com/"
          className="text-white text-xl border-2 px-8 py-1.5 rounded-full border-white flex items-center hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
        >
          Search Books
        </a>
      </div>
      <Magazine />
      <Books />
    </div>
  );
};

export default Library;
