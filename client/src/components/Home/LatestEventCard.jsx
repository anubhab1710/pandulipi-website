import React from 'react'

function LatestEventCard({title, content, imgLink}) {
  return (
    <div className="flex justify-center hover:scale-110 transition-all flex-shrink-0">
        <div className="rounded-lg bg-white max-w-xs md:max-w-md shadow-2xl">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-full" src={imgLink} alt=""/>
            </a>
            <div className="p-10 flex gap-y-5 flex-col items-center">
                <h5 className="text-gray-900 text-3xl text-center font-medium mb-2 md:text-5xl">{title}</h5>
                <p className="text-justify overflow-hidden h-28 md:h-56 xl:text-xl md:text-left">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default LatestEventCard