import React from 'react'

const CoreTeam = () => {
    const coreTeamDetails = [
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU"
        },
    ]
    return (
        <div>
            <h1 className='text-center text-5xl p-10 text-[#295C7A]'>Meet the Core Team</h1>
            <div>
                <div className='flex justify-center items-center flex-wrap gap-x-32 gap-y-8 mb-10 px-10'>
                    {coreTeamDetails.map((details) => (
                        <div className='flex flex-col items-center gap-4'>
                            <div className='relative'>
                                <img src={details.imgLink} alt={details.name} className='rounded-full mx-auto  w-48 h-48' />
                                <button className='absolute bottom-5 right-5 rounded-full py-[6px] px-[15px] bg-white shadow-md'>-</button>
                            </div>
                            <div>
                                <p className='text-center font-bold'>{details.name}</p>
                                <p>{details.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CoreTeam