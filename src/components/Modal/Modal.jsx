import React from "react";

import './Modal.css'

function Modal() {

    function closeModal(){
        document.querySelector('.modal').style.display = 'none'
    }


    return (
        <>
            <div className="modal">
                <div className="modal-title"><h1>Модалка</h1></div>
                <div  onClick={closeModal} className="btn">Зыкрыть модалку</div>
            </div>

        </>
    )


}

export default Modal