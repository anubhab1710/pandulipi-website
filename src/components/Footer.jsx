import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#252B42]'>

    <div className='h-64 text-white flex items-center gap-x-64 font-oranienbaum'>
        <div className='flex flex-col items-center'>
            <p className='text-[32px]'>Pandulipi Magazine Club</p>
            <p className='text-[20px]'>Jalpaiguri Government Engineering College</p>
        </div>
        <div className='flex gap-7 scale-150'>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.facebook.com/mag.pandulipi.jgec/">
                   
                </a>
            </div>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.instagram.com/pandulipiofficial/">
                  
                </a>
            </div>
            <div className='scale-125'>
                <a href="https://www.linkedin.com/company/pandulipi/">
                    
                </a>
            </div>
            <div className='scale-125 cursor-pointer'>
                <a href="https://www.youtube.com/@JGECDiaries">
                
                </a>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Footer