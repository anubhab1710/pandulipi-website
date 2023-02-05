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
    <div>
      {show && children}
      <button id="loadmore" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}