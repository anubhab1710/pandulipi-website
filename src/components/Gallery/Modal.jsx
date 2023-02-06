import React from 'react'
import '../Team/modal.css'


const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div onClick={props.onClose} className='modal'>
            <button type='button' onClick={props.onClose} className="Off"><span className="material-symbols-rounded">Close</span></button>
            <div className="card">
                {props.children}
            </div>
        </div>
    )
}

export default Modal