import React from 'react'

function LatestPostsCard({title, content, link}) {
  return (
    <div className="flex flex-col flex-shrink-0 bg-[#224e68] justify-center items-center hover:scale-110 transition-all md:flex-row">
        <img className="h-96 object-cover w-full md:h-full max-w-sm" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kolpaper.com%2Fwp-content%2Fuploads%2F2021%2F03%2FChainsaw-Man-Wallpaper-Desktop.jpg&f=1&nofb=1&ipt=530e6e99ed17caab91910781ca428d6ccb2d6f2678ee2a2902886b8cd9803752&ipo=images" alt="" />
        <div className="py-10 px-7 md:px-10 flex flex-col items-center justify-center max-w-sm md:max-w-xl gap-y-10 md:items-start">
            <h3 className="text-4xl xl:text-6xl">{title}</h3>
            <p className="text-justify overflow-hidden h-28 md:h-56 xl:text-xl md:text-left">{content}</p>
            <a href={link} className="inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold border-2 border-white text-white">
                View Post
            </a> 
        </div>
    </div>
  )
}

export default LatestPostsCard