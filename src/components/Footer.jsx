import React from 'react'
import insta from '../img/instagram-logo-84.png'
import Linkedin from '../img/linkedin-square-logo-84.png'
import Youtube from '../img/youtube-logo-84.png'
import Facebook from '../img/facebook-circle-logo-84.png'
function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#252B42] md:py-10'>

    <div className='text-center text-white flex flex-col items-center gap-x-64 p-10 gap-y-10 font-oranienbaum xl:flex-row'>
        <div className='flex flex-col items-center'>
            <p className='text-[32px]'>Pandulipi Magazine Club</p>
            <p className='text-[20px]'>Jalpaiguri Government Engineering College</p>
        </div>
        <div className='flex gap-7 scale-150'>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.facebook.com/mag.pandulipi.jgec/">
                    <img src={Facebook} alt="" className='h-6'/> 
                </a>
            </div>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.instagram.com/pandulipiofficial/">
                    <img src={insta} alt="" className='h-6'/> 
                </a>
            </div>
            <div className='scale-125'>
                <a href="https://www.linkedin.com/company/pandulipi/">
                    <img src={Linkedin} alt="" className='h-6'/>
                </a>
            </div>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.youtube.com/@JGECDiaries">
                    <img src={Youtube} alt="" className='h-6'/>   
                </a>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Footer