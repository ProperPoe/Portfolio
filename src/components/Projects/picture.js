import React from 'react'
import Keyboard from '../../assets/fonts/images/Final.png'
import Keyboard1 from '../../assets/fonts/images/pics.png'
import Trivia from '../../assets/fonts/images/Triviafront.png'
import './picture.scss'

function Picture({ pic, closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                {pic === "clipflow" ?
                    <img src={Keyboard} alt='clipflow' />
                    :
                    pic === "travel"?
                    <img src={Keyboard1} alt='travel' />
                    :
                    <img src={Trivia} alt='trivia' />
                }
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Picture
