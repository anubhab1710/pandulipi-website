import React from "react";
import "./modal.css";
const Card = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="card">
        <div class="bg-gray-900 absolute top-[5rem] rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <button onClick={props.onClose} className="close">
            <svg
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
            </svg>
          </button>
          <div class="w-full h-full md:w-2/5 h-80">
            <img
              class="object-center object-cover w-full h-full"
              src={props.details.imgLink}
              alt={props.details.name}
            />
          </div>
          <div class="md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p class="text-xl text-white font-bold">{props.details.name}</p>
            <p class="text-base text-gray-400 font-normal">
              {props.details.designation}
            </p>
            <p class="text-base leading-relaxed text-gray-500 font-normal mb-4">
              {props.details.department}
            </p>
            <div
              class="flex justify-start items-center space-x-5"
              style={{ marginTop: "1rem" }}
            >
              <a
                target="_blank"
                href={props.details.linkedin}
                class="text-gray-500 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  width="30px"
                  height="30px"
                >
                  {" "}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                </svg>
              </a>
              {props.details.github.length > 0 ? (
                <a
                  target="_blank"
                  href={props.details.github}
                  class="text-gray-500 hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
