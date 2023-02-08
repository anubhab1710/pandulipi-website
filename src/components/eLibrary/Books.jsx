import React from 'react'
import './library.css';
import ToggleVisibility from "./ToggleShow";
import BookMore from './MoreBooks';

const Books = () => {
    const bookDetails = [
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating":3
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink" : "#######",
            "rating":2
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating": 5
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink" : "#######",
            "rating":1
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating":4
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating":3
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink" : "#######",
            "rating":2
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating": 5
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink" : "#######",
            "rating":1
        },
        {
            "name": "Lorem Ipsum Lorem Ipsum ",
            "author": "Mr. Lorem Ipsum",
            "authorProfile" : "https://wikipedia.org/author",
            "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink" : "#######",
            "rating":4
        },
        
    ]
    return (
        <div>
            <h4 className='text-center md:text-left md:pl-28'>Latest Books of Pandulipi</h4>
            <div>
                <div id='row'>
                    {bookDetails.map((details) => (
                        <div id='card' className = 'height-4'>
                            <div className='relative'>
                                <img src={details.imgLink} alt={details.name} />
                                <a href = {details.downloadLink} id='button'className='absolute bottom-40 right-5 rounded-full py-[10px] px-[15px] bg-white shadow-md'>
                                    <span id='download' className="material-symbols-rounded">download</span>
                                </a>
                                <div className = 'details'>
                                    <p className='name'>{details.name}</p>
                                    <p className='author'><a href= {details.authorProfile}>{details.author}</a></p>
                                    <p className='description'>{details.description}</p>
                                    <div>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class = 'more'>
                    <ToggleVisibility>
                        <BookMore />
                    </ToggleVisibility>
                </div>

            </div>
            {/* <div id="loadmore">Find More Books</div> */}
        </div>
    )
}

export default Books