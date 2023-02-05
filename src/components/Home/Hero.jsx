import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <img className='absolute -z-10 h-full w-full object-cover' src="http://yesofcorsa.com/wp-content/uploads/2016/12/4k-Winter-Desktop-Wallpaper.jpg" alt="" />
        <div className='h-full w-full bg-gray-200 bg-opacity-60 flex flex-col justify-center items-center'>
            <h1 className='text-7xl xl:text-9xl'>Pandulipi</h1>
            <h2 className='text-5xl xl:text-8xl text-[#295C7A]'>Magazine</h2>
            <div className='p-10 text-center max-w-5xl xl:text-2xl'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae laboriosam sequi minus corrupti culpa excepturi cumque iste quae distinctio magni fuga maiores tenetur, animi fugiat, quasi modi minima eius?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, adipisci? Dignissimos facilis dicta aperiam reiciendis. Illum, tenetur. Veniam, eos impedit eligendi sint nesciunt iure exercitationem suscipit ea placeat. Similique, alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sequi neque non adipisci ipsum soluta quo optio voluptate. Officia aliquid eaque eligendi, vitae quidem autem neque rem ut. Optio, iusto?</p>
            </div>
            <a href="#" class="inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold text-gray-900 border-2 border-[#295C7A] hover:bg-[#295C7A] hover:text-white">
                Learn More
            </a>  
        </div>
    </div>
  )
}

export default Hero