import React from "react";

function LatestEventCard({ title, content }) {
  return (
    <div className="rounded-lg p-10  bg-white max-w-xs md:max-w-md shadow-2xl flex gap-y-5 flex-col items-center hover:scale-110 transition-all flex-shrink-0">
      <h5 className="text-gray-900 text-3xl text-center font-medium mb-2 md:text-4xl">
        {title}
      </h5>
      <p className="text-justify md:text-xl md:text-left line-clamp-6 hover:line-clamp-none ">
        {content}
      </p>
    </div>
  );
}

export default LatestEventCard;
