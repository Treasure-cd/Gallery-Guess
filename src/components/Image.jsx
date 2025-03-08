import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Image = ({ isCorrect, isWrong }) => {
  return (
    <div className="overlay-container">
      <img src="public/Mona_Lisa.jpg" alt="Mona Lisa" className="clear" />
      {isCorrect && (
        <div className="overlay">
          <FontAwesomeIcon icon={faCheck} className='check-icon' />
        </div>
      )}
      {isWrong && (
        <div className='overlay-wrong'></div>
      )}
    </div>
  );
}

export default Image;