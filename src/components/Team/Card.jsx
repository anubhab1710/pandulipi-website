import React from 'react'
import './modal.css'
import fb from '../../assets/social media icons/facebook.svg'
import ig from '../../assets/social media icons/instagram.svg'
import gh from '../../assets/social media icons/github.svg'
import ln from '../../assets/social media icons/linkedin.svg'


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
                                    <img src={fb} alt="" className='h-8' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={insta} alt="" className='h-6' /> */}
                                    <img src={ig} alt="" className='h-8' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={Linkedin} alt="" className='h-6' /> */}
                                    <img src={ln} alt="" className='h-8' />
                                </a>
                            </div>
                            <div className='cursor-pointer'>
                                <a href={props.github} target="_blank" rel="noopener noreferrer">
                                    {/* <img src={Youtube} alt="" className='h-6' /> */}
                                    <img src={gh} alt="" className='h-8' />
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