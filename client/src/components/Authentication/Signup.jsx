import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Pandulipi Logo - White.png";
const Signup = () => {
  return (
    <>
      <div className="flex justify-center items-center max-h-fit w-screen bg-[#252b42] py-10 px-5">
        <div className=" flex-col rounded-xl max-w-lg bg-[#fff] shadow-[0_0_10px_#00000080]">
          <div className="bg-[#295C7Acc] flex items-center justify-center rounded-t-xl ">
            <img src={logo} className="w-9/12" alt="Pandulipi logo" />
          </div>
          <div className="flex flex-col items-center p-4 sm:px-16 ">
            <h1 className="text-center text-3xl pb-6 pt-2 font-semibold ">
              Create your account
            </h1>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative">
                <div className="absolute top-[-.9rem] left-[-.75rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#295C7A"
                    className="w-8 h-8 m-4"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
                        data-name="person"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="p-1.5 pl-10  text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-80 sm:w-96 focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute top-[-.7rem] left-[-.75rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#295C7A"
                    className="w-7 h-7 m-4"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-80 sm:w-96 focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute top-[-8px] left-[-.5rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#295C7A"
                    className="w-8 h-8 m-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.73 12.996c-.463 1.407-2.277 2.109-3.573 1.992-1.77-.16-3.696-1.099-5.158-2.133C3.85 11.335 1.837 8.984.664 6.489-.165 4.726-.351 2.558.882.951c.456-.594.95-.911 1.69-.948C3.6-.047 3.744.541 4.097 1.457c.263.685.614 1.384.81 2.094.367 1.325-.916 1.38-1.078 2.463-.1.683.727 1.599 1.101 2.086a10.105 10.105 0 0 0 2.608 2.403c.57.359 1.488 1.006 2.14.649 1.004-.55.91-2.243 2.313-1.67.727.296 1.431.723 2.125 1.097 1.073.577 1.023 1.175.614 2.417-.306.928.306-.928 0 0"
                    />
                  </svg>
                </div>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder="Enter your phone number"
                  name="phone"
                  className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-80 sm:w-96 focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute top-[2px] left-[6px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="#295C7A"
                    className="w-7 h-7"
                  >
                    <path d="M10.5 20a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm0 6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm1-11h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm9 11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zM16 19.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4zm4.5.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm-5 6h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zm11-16H25V4c0-1.103-.897-2-2-2s-2 .897-2 2v1H11V4c0-1.103-.897-2-2-2s-2 .897-2 2v1H4.5A2.502 2.502 0 0 0 2 7.5v20C2 28.879 3.121 30 4.5 30h23c1.379 0 2.5-1.121 2.5-2.5v-20C30 6.121 28.879 5 27.5 5zM22 4a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V4zM8 4a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V4zm21 23.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5V12h26v15.5zM29 11H3V7.5C3 6.673 3.673 6 4.5 6H7v1c0 1.103.897 2 2 2s2-.897 2-2V6h10v1c0 1.103.897 2 2 2s2-.897 2-2V6h2.5c.827 0 1.5.673 1.5 1.5V11z" />
                  </svg>
                </div>
                <select className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96  rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none">
                  <option className="text-gray-500" value="" disabled selected>
                    The year of graduation
                  </option>
                  <option className="text-gray-500" value="2023">
                    2023
                  </option>
                  <option className="text-gray-500" value="2024">
                    2024
                  </option>
                  <option className="text-gray-500" value="2025">
                    2025
                  </option>
                  <option className="text-gray-500" value="2026">
                    2026
                  </option>
                  <option className="text-gray-500" value="alumni">
                    Alumni
                  </option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute top-[1px] left-[2px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="#295C7A"
                    className="w-10 h-10"
                  >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                </div>
                <select className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96 rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none">
                  <option className="text-gray-500" value="" disabled selected>
                    Choose your department
                  </option>
                  <option className="text-gray-500" value="IT">
                    Information Engineering
                  </option>
                  <option className="text-gray-500" value="CSE">
                    Computer Science & Engineering
                  </option>
                  <option className="text-gray-500" value="ECE">
                    Electronics & Communication Engineering
                  </option>
                  <option className="text-gray-500" value="CE">
                    Civil Engineering
                  </option>
                  <option className="text-gray-500" value="EE">
                    Electrical Engineering
                  </option>
                  <option className="text-gray-500" value="ME">
                    Mechanical Engineering
                  </option>
                  <option className="text-gray-500" value="BSH">
                    Basic Sciences & Humanities
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center w-full gap-x-3">
                <div className="relative">
                  <div className="absolute top-[3px] left-[.3rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="#295C7A"
                      className="w-7 h-7"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="off"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96 rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-[3px] left-[.3rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="#295C7A"
                      className="w-7 h-7"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="off"
                    type="password"
                    placeholder="Confirm your password"
                    name="cpassword"
                    className="p-1.5 pl-10 w-80 sm:w-96 text-black font-medium bg-[#295C7A] bg-opacity-10  rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="text-white text-lg py-2 px-6 font-bold mt-3 bg-[#295C7A] hover:bg-[#1a5171] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto  text-center"
                >
                  Sign Up
                </button>
              </div>
              <div className="pb-2">
                <span className="text-xl font-medium">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="text-xl text-[#252b42] font-bold"
                  >
                    Login
                  </NavLink>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
