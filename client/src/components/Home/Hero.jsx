import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <img className='absolute -z-10 h-[120vh] w-full object-cover' src="https://img.freepik.com/premium-photo/simple-composition-from-many-hardback-books-tinted-classic-blue-color_96336-515.jpg?w=2000" alt="" />
        <div className='m-5 py-20 rounded-3xl max-w-7xl bg-gray-300 bg-opacity-50 backdrop-blur-md transition-all duration-500 flex flex-col justify-center items-center'>
            <h1 className='text-7xl xl:text-8xl'>Pandulipi</h1>
            <h2 className='text-5xl xl:text-7xl text-[#295C7A]'>Magazine</h2>
            <div className='p-10 md:p-20 text-justify max-w-6xl xl:text-2xl'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae laboriosam sequi minus corrupti culpa excepturi cumque iste quae distinctio magni fuga maiores tenetur, animi fugiat, quasi modi minima eius?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, adipisci? Dignissimos facilis dicta aperiam reiciendis. Illum, tenetur. Veniam, eos impedit eligendi sint nesciunt iure exercitationem suscipit ea placeat. Similique, alias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sequi neque non adipisci ipsum soluta quo optio voluptate. Officia aliquid eaque eligendi, vitae quidem autem neque rem ut. Optio, iusto?</p>
            </div>
            <a href="#" class="transition ease-in-out delay-150 inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold text-gray-900 border-2 border-[#295C7A] hover:bg-[#295C7A] hover:text-white hover:scale-110 hover:translate-y-1">
                Learn More
            </a>  
        </div>
    </div>
  )
}

export default Hero