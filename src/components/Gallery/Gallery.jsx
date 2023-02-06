import React, { useState } from 'react'
import Modal from './Modal';
import './style.css';

const Gallery = () => {
    const column1 = [
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/15286/pexels-photo.jpg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
    ]
    const column2 = [
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/15286/pexels-photo.jpg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
    ]
    const column3 = [
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/15286/pexels-photo.jpg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
    ]
    const column4 = [
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/15286/pexels-photo.jpg"
        },
        {
            "name": "Lorem Ipsum",
            "description": "Lorem Ipsum Lorem",
            "imgLink": "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        },
    ]
    
    // var a;
    var a = "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg";
    const [show, setShow] = useState(false)

    function set(p){
        a = p;
        // setShow(true);
    }


    return (
        <div id='canvas'>
            <h1 className='text-center text-5xl p-10 text-[#fff]'>Events Gallery</h1>
            <div id='row'>
                {/* <div id='row' className='flex flex-wrap py-0 px-6'> */}
                <div className='column'>
                    {column1.map((details) => (
                        <div>
                            <img onClick={()=>{
                                {set(details.imgLink)};
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>

                    ))}
                </div>
                <div className='column'>
                    {column2.map((details) => (
                        <div>
                            <img onClick={()=>{
                                {set(details.imgLink)};
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column3.map((details) => (
                        <div>
                            <img onClick={()=>{
                                {set(details.imgLink)};
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column4.map((details) => (
                        <div>
                            <img onClick={()=>{
                                {set(details.imgLink)};
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>

            </div>

            <Modal onClose={() => setShow(false)} show={show}>
                <img src={a} />
            </Modal>          
        </div>

    )
}

export default Gallery