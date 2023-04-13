import React, { useState } from "react";
import './library.css'

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Show Less" : "Show More";

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {show && children}
      <button className="m-10 border-2 border-white text-white inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center transition-all hover:scale-110 hover:bg-white hover:text-[#252B42]" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}