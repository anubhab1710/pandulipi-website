import React, { useState } from 'react'
import Card from './Card'


const CoreTeam = () => {
    const [show, setShow] = useState(false)
    const coreTeamDetails = [
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        }, {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
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
                                <button onClick={() => { setShow(true) }} className='absolute bottom-4 right-0 rounded-full py-[6px] px-[15px] bg-transparent '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='#fff' viewBox="0 0 20 20" className='shadow-[0_0_4px_#444] rounded-full'>
                                        <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <p className='text-center font-bold'>{details.name}</p>
                                <p>{details.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Card onClose={() => setShow(false)} show={show} />


        </div>
    )
}

Card.defaultProps =
{
    "name": "Lorem Ipsum",
    "designation": "Lorem Ipsum Lorem",
    "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.It may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, without the meaning of the text influencing the design.",
    "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
    "facebook": "www.facebook.com",
    "instagram": "www.instagram.com",
    "linkedin": "www.linkedin.com",
    "github": "www.github.com"
};

export default CoreTeam