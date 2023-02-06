import React, { useState } from 'react'
import Card from './Card'


const CoreTeam = () => {
    const coreTeamDetails = [
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "www.facebook.com",
            "instagram": "www.instagram.com",
            "linkedin": "www.linkedin.com",
            "github": "www.github.com"
        },
        {
            "name": "Lorem Ipsum",
            "designation": "Lorem Ipsum Lorem",
            "description": " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "https://www.facebook.com",
            "instagram": "https://www.instagram.com",
            "linkedin": "https://www.linkedin.com",
            "github": "https://www.github.com"
        },
    ]

    const [show, setShow] = useState(false)
    
    return (
        <div>
            <h1 className='text-center text-5xl p-10 text-[#295C7A]'>Meet the Core Team</h1>
            <div>
                <div className='flex justify-center items-center flex-wrap gap-x-32 gap-y-8 mb-10 px-10'>
                    {coreTeamDetails.map((details) => (
                        <div className='flex flex-col items-center gap-4'>
                            <div className='relative'>
                                <img src={details.imgLink} alt={details.name} className='rounded-full mx-auto  w-48 h-48' />
                                <button onClick={()=>{setShow(true)}} className='absolute bottom-5 right-5 rounded-full py-[6px] px-[15px] bg-white shadow-md'>-</button>
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
    name: "Lorem Ipsum",
    designation: "Lorem Ipsum Lorem",
    description: " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
};

export default CoreTeam