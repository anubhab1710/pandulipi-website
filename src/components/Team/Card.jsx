import React from 'react'
import './modal.css'
// import insta from './img/instagram-logo-84.png'
// import Linkedin from './img/linkedin-square-logo-84.png'
// import Youtube from './img/youtube-logo-84.png'
// import Facebook from './img/facebook-circle-logo-84.png'

const Card = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className="card">
                <button onClick={props.onClose} className="close "><span className="material-symbols-rounded">Close</span></button>
                <div className='card-content'>
                    <div className="img_links">
                        <img src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg" alt={props.name} className='card-image' />
                        <div className='socialmedia' >
                            <div className='cursor-pointer'>
                                <a href={props.facebook} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={Facebook} alt="" className='h-6' /> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" className='h-6' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={insta} alt="" className='h-6' /> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="" className='h-6' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={Linkedin} alt="" className='h-6' /> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" className='h-6' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.github} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={Youtube} alt="" className='h-6' /> */}
                                    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" className='h-6' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h5 className='text-4xl font-bold'>{props.name}</h5>
                        <h6 className='text-2xl font-semi-bold mt-2'>{props.designation}</h6>
                        <div className='desc mt-4'>
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Card