import React from 'react'
import './blog.css'

export default function BlogCard(props) {
    return (
        <div>
            <div className="Top-head">
                <div className='head1 text-2xl'>
                    <span>{props.author}</span>
                    <span>
                    </span>
                </div>
                <div className="font-normal">{props.time}</div>
            </div>
            <div id='blog'>
                <img src={props.imgLink} alt={props.name} />
                <div className='flex flex-col mx-4'>
                    <div className='my-1 mt-2'><a href="#">{props.tags}</a>
                    </div>
                    <h1 className='text-2xl text-#F0F8FF my-1'>{props.title}...</h1>
                    <div className="flex flex-wrap my-1">{props.content}...</div>
                    <a class="readMore" href="#" role="button">Read More</a>
                    <div className='flex gap-3 mt-4 mb-4'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f80303" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </span>
                        <span className='text-xl text-red-600'>
                            {props.likes} Likes
                        </span>
                    </div>
                </div>
            </div>

        </div >
    )
}
