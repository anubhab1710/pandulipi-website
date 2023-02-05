import React from 'react'

function LatestEventCard({title, link}) {
  return (
    <div className="flex justify-center flex-shrink-0">
        <div className="rounded-lg bg-white max-w-xs md:max-w-md shadow-2xl">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-full" src={link} alt=""/>
            </a>
            <div className="p-10 flex gap-y-5 flex-col items-center">
                <h5 className="text-gray-900 text-3xl text-center font-medium mb-2 md:text-5xl">{title}</h5>
                <button type="button" className="font-semibold inline-block px-6 py-2.5 bg-[#1a5171] text-white text-xs xl:text-xl leading-tight uppercase rounded-md shadow-md hover:bg-[#123c54] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View More</button>
            </div>
        </div>
    </div>
  )
}

export default LatestEventCard