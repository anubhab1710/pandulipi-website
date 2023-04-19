import React, { useState } from "react";

function LatestEventCard({ title, content }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const buttonText = showMore ? "Read Less" : "Read More";
  return (
    <div className="rounded-lg p-10 md:h-96 bg-white max-w-xs md:max-w-md shadow-2xl flex gap-y-5 flex-col items-center transition-all flex-shrink-0">
      <h5 className="text-gray-900 text-3xl text-center font-medium mb-2 md:text-4xl">
        {title}
      </h5>
      <p
        className={`${
          showMore
            ? "text-justify md:text-xl md:text-left"
            : "line-clamp-6 text-justify md:text-xl md:text-left"
        }`}
      >
        {content}
      </p>
      <button
        onClick={toggleShowMore}
        className="bg-[#295C7A] px-3 py-2 rounded-md font-semibold hover:bg-[#1a5171] text-white focus:outline-none"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default LatestEventCard;
