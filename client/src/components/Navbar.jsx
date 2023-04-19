import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Pandulipi Logo.png";
import "../components/navbar.css";
function Navbar() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const clickAndScroll = () => {
    handleClick();
    scrollToTop();
  };
  return (
    <nav className="sticky top-0 z-50  px-2 sm:px-4 py-2.5 bg-gray-900 drop-shadow-2xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            className="m-3 h-12 mt-0 xl:h-16"
            alt="Pandulipi Logo"
          />
          <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-white">
            Pandulipi
          </span>
        </a>
        <input
          onClick={handleClick}
          checked={checked}
          type="checkbox"
          id="menu-toggle"
          style={{ display: "none" }}
        />
        <label
          for="menu-toggle"
          className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {!checked ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </label>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="flex flex-col md:items-center p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/about"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/gallery"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Events Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/blog"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Blog Page
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/elibrary"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                eLibrary
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={clickAndScroll}
                to="/team"
                className="block hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Team
              </NavLink>
            </li>
            <div className="flex gap-x-5 visible sm: justify-center">
              <NavLink
                onClick={clickAndScroll}
                to="/login"
                className="inline-block mt-3 md:mt-0 md:ml-10  px-6 py-2.5 bg-blue-600 text-white font-bold text-sm md:text-base leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </NavLink>
              <NavLink
                onClick={clickAndScroll}
                to="/signup"
                className="inline-block mt-3 md:mt-0 px-6 py-2 border-2 border-blue-600 text-blue-300 font-bold text-sm md:text-base leading-tight uppercase rounded hover:bg-blue-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Sign up
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
