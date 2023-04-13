import React, { useState } from 'react'
import Card from './Card'


const CoreTeam = () => {
    const [show, setShow] = useState(false)
    const coreTeamDetails = [
        {
            "name": "SHREYAN GHATAK",
            "designation": "Secretary & English Editor",
            "department": "Civil Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        },
        {
            "name": "ANSHIK CHAND",
            "designation": "Cashier &  Hindi Editor",
            "department": "Civil Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "SHANKHALIKA MALLICK",
            "designation": "Cashier & English Editor",
            "department": "Electronics & Communication Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "ANIRBAN DEBNATH",
            "designation": "Media & Technical Head",
            "department": "Electronics & Communication Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "ANUBHAV SARKAR",
            "designation": "English Editor",
            "department": "Electronics & Communication Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "PRAKRITISH MUKHOPADHYAY",
            "designation": "Bengali Editor",
            "department": "Civil Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "RAJDEEP NATH",
            "designation": "Bengali Editor",
            "department": "Mechanical Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "BABAI GHOSH",
            "designation": "Bengali Editor",
            "department": "Electrical Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "DEBOPRIYA DAS",
            "designation": "Artwork Head",
            "department": "Civil Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "ANILABHA DATTA",
            "designation": "Photography Head",
            "department": "Computer Science & Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "SAYANGDIPTA SEN",
            "designation": "Design Head",
            "department": "Civil Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "ARNAB PARAMANIK",
            "designation": "Design Head",
            "department": "Mechanical Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
        }, {
            "name": "MAINAK MAITY",
            "designation": "Design Head",
            "department": "Mechanical Engineering",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
            "facebook": "",
            "instagram": "",
            "linkedin": "",
            "github": ""
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
                                <button onClick={() => { setShow(true) }} className='absolute bottom-4 right-[-3px] rounded-full py-[6px] px-[15px] bg-transparent '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill='#fff' viewBox="0 0 20 20" className='white shadow-md rounded-full'>
                                        <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <p className='text-center font-bold'>{details.name}</p>
                                <p className='text-center'>{details.designation}</p>
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
    "department": "Lorem Ipsum",
    "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeZj1SB4KzSbjx_oKlZpyrOLlEL9K9DW0JA&usqp=CAU",
    "facebook": "",
    "instagram": "",
    "linkedin": "",
    "github": ""
};

export default CoreTeam