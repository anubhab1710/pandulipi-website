import React from 'react'

function LatestPostsCard({title, content, imgLink, postLink}) {
  return (
    <div className="flex shadow-xl flex-col flex-shrink-0 bg-[#224e68] justify-center items-center hover:scale-110 transition-all md:flex-row">
        <img className="h-96 object-cover w-full md:h-full max-w-sm" src={imgLink} alt="" />
        <div className="py-10 px-7 md:px-10 flex flex-col items-center justify-center max-w-sm md:max-w-xl gap-y-10 md:items-start">
            <h3 className="text-4xl xl:text-6xl">{title}</h3>
            <p className="text-justify overflow-hidden h-28 md:h-56 xl:text-xl md:text-left">{content}</p>
            <a href={postLink} className="cursor-pointer inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]">
                View Post
            </a> 
        </div>
    </div>
  )
}

export default LatestPostsCard