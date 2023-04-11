import React from "react";
import "./blog.css";

export default function BlogCard(props) {
  return (
    <div>
      <div className="Top-head">
        <div className="head1 text-2xl">
          <span>{props.author}</span>
          <span></span>
        </div>
        <div className="font-normal">{props.time}</div>
      </div>
      <div id="blog">
        <img src={props.imgLink} alt={props.name} />
        <div className="flex flex-col mx-4">
          <div className="my-2">
            {props.tags.map((item) => (
              <a
                href="#"
                className="bg-slate-700 mr-1 rounded-md px-2 py-1 text-semibold text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <h1 className="text-2xl text-bold text-#F0F8FF my-1">
            {props.title}...
          </h1>
          <div className="flex flex-wrap my-1">{props.content}...</div>

          <button
            type="button"
            href="#"
            class="text-white text-sm font-semibold tracking-wider bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Blog
          </button>

          <div className="flex gap-2 items-center ml-3 mt-2 mb-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f80303"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:cursor-pointer"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
            <span className="text-lg text-red-600 ">{props.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
