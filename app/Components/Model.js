import React, { Children } from 'react'


const Modal = ({ openModal, setOpenModal, children }) => {

    return (


        <div id="my_modal_3" className={`modal   top-5   ${openModal &&'modal-open'}`}>

            {children}

        </div>
    )
}

export default Modal
