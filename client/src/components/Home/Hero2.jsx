import React from 'react'

function Hero2() {
  return (
    <div className='min-h-screen gap-x-60 bg-[#252B42] flex flex-col justify-center items-center xl:flex-row'>
        <img className='p-10 max-w-sm md:max-w-lg xl:max-w-xl' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781421539669%2Fdeath-note-black-edition-vol-3-9781421539669_hr.jpg&f=1&nofb=1&ipt=a5a617b12c7a14d830d31db465e3888a092f636b8a2f7b650dde2fd8a7cb8a6e&ipo=images" alt="" />
        <div className='text-white p-10 flex flex-col justify-center items-center xl:gap-y-32'>
            <div className='flex flex-col gap-y-3  justify-center items-center'>
                <h1 className='text-4xl xl:text-8xl'>Pandulipi</h1>
                <h2 className='text-2xl xl:text-6xl'>2021-2022</h2> 
            </div>
            <a href="#" class="m-10 border-2 border-white text-white inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center transition-all hover:scale-110 hover:bg-white hover:text-[#252B42]">
                Learn More
            </a>
        </div>
    </div>
  )
}

export default Hero2