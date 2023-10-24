import React from 'react'
import Keyboard from '../../assets/fonts/images/Final.png'
import Keyboard1 from '../../assets/fonts/images/pics.png'
import './picture.scss'

function Picture({ pic, closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                {pic === "clipflow" ?
                    <img src={Keyboard} alt='clipflow' />
                    :
                    <img src={Keyboard1} alt='travel' />
                }
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Picture
