import React from 'react'
import insta from '../assets/icons/instagram-logo-84.png'
import Linkedin from '../assets/icons/linkedin-square-logo-84.png'
import Youtube from '../assets/icons/youtube-logo-84.png'
import Facebook from '../assets/icons/facebook-circle-logo-84.png'
import Logo from '../assets/img/logo1.png'
function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#252B42] md:py-5'>

    <div className='text-center text-white flex flex-col items-center gap-x-64 py-10 gap-y-10 font-oranienbaum xl:flex-row'>
        <div className='flex flex-col items-center md:flex-row'>
            <img className='h-28 mx-20 md:mx-0 md:mr-20 mb-5 md:mb-0' src={Logo} alt="" />
            <div className='flex px-10 md:p-0 flex-col items-center'>
                <p className='text-[32px]'>Pandulipi Magazine Club</p>
                <p className='text-[20px]'>Jalpaiguri Government Engineering College</p>
            </div>
        </div>
        <div className='flex scale-150 mb-5 gap-7 md:mr-7 mr-0'>
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
            <div className='scale-125 cursor-pointer'>
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