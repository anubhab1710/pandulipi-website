import React, { useState } from 'react'
import Modal from './Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './style.css';

const Album1 = () => {
    const column1 = [
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
            "imgLink": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
        },
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

    const imagePerColumn = 6;
    const [next, setNext] = useState(imagePerColumn);
    const [show, setShow] = useState(false);
    const [btnText, setBtnText] = useState("Load More");

    const handleMoreImage = () => {
        if(next >= (Math.max(column1.length, column2.length, column3.length, column4.length)-imagePerColumn))
        {
            setBtnText("Show Less")
            setNext(imagePerColumn)
        }
        else{
            setBtnText("Load More")
            setNext(next + imagePerColumn);
        }
    };

    // var a;
    var a = "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg";

    function set(p) {
        a = p;
        // setShow(true);
    }


    return (
        <>
            <div id='row'>
                {/* <div id='row' className='flex flex-wrap py-0 px-6'> */}
                <div className='column'>
                    {column1.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>

                    ))}
                </div>
                <div className='column'>
                    {column2.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column3.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column4.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>

            </div>

            <Modal onClose={() => setShow(false)} show={show}>
                <LazyLoadImage src={a} />
            </Modal>
            
            <div className='flex flex-wrap justify-center'>
                <button type='button' className="cursor-pointer inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]" onClick={handleMoreImage}>{btnText}</button>
            </div>
        </>
    )
}

export default Album1