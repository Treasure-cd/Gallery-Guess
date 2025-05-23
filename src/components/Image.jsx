import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Image = ({ isCorrect, isWrong }) => {
    const rightGuess = ["Mona Lisa", "Leonardo da vinci"];
  return (
    <div className="overlay-container">
      <img src="public/Mona_Lisa.jpg" alt="Mona Lisa" className="clear" />
      {isCorrect && (
        <div className="overlay">
          <FontAwesomeIcon icon={faCheck} className='check-icon' />
        </div>
      )}
      {isWrong && (
        <div className='overlay-wrong' > <FontAwesomeIcon icon={faXmark} className='big-x-mark' /><span className='correct-answer'>ANS: {rightGuess[1]}</span></div>
      )}
    </div>
  );
}

export default Image;