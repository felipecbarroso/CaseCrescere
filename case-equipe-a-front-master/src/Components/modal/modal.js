import React from 'react';
import './modal-style.css';
import Close from '../../assets/images/close.svg';

function Modal({id='modal', onClose=()=> {}, children, container}) {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    const handleClose = () => {
        onClose();
        window.location.reload();
    }

    return (
        <div id={id} className='modal' onClick={handleOutsideClick}>
            <div className= {container}>
                <button className='close' onClick={()=>handleClose()} type="submit">
                  <img src={Close}/>
                </button>
                <div className='content'>{children}</div>
            </div>
        </div>
    );

}
export default Modal;
