import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const GuessInput = ({ isCorrect, isWrong, setIsCorrect, setIsWrong, setRoundTwo }) => {
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [failCount, setFailCount] = useState(0);
  const [wrongGuessesIndicator, setWrongGuessesIndicator] = useState(false)

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  const rightGuess = "Mona Lisa";

  function guesses() {
    if (guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess.toLowerCase().replace(/\s/g, '')) {
      setIsCorrect(true);
    } else {
      setWrongGuessesIndicator(true);
      setWrongGuesses(g => [...g, guess]);
      setFailCount(failCount + 1);
      if (failCount + 1 >= 3) {
        setIsWrong(true);
      }
    }
    setGuess("");
  }

  function roundTwoOpen() {
    setRoundTwo(1);
  }

  return (
    <div className='guess-container'>
      
        <>
          <div className='input-button'>
          {!isCorrect && !isWrong ? ( <> <input
              type="text"
              className='input-box'
              placeholder='Enter art name'
              value={guess}
              onChange={handleInputChange}
            />
            <button
              className='guess-button'
              onClick={guesses}
            >
              GUESS
            </button></> ) : ( <> <input
              type="text"
              className='input-box'
              placeholder='Enter art name'
              value={guess}
            />
            <button
              className='guess-button'

            >
              GUESS
            </button></>) }
          </div>
          <div>
            {wrongGuessesIndicator ? (<p className='indicator'>Wrong Guesses <FontAwesomeIcon icon={faXmark} className='Xmark-icon'/></p>) : (null)}
            {wrongGuesses.map((wrongGuess, index) => (
              <div className='text-container' key={index}>
                <span className='text'>{wrongGuess}</span>
              </div>
            ))}
          </div>
        </>
        {!isCorrect && !isWrong ? (null) : (
        <button className='next-round-button' onClick={roundTwoOpen}>
          Next Round
        </button>
      )}
    </div>
  );
}

export default GuessInput;