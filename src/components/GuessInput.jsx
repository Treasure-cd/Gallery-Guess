import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const GuessInput = ({ isCorrect, isWrong, setIsCorrect, setIsWrong, setRoundTwo, setArtOrArtist }) => {
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [failCount, setFailCount] = useState(0);
  const [wrongGuessesIndicator, setWrongGuessesIndicator] = useState(false)

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  const rightGuess = ["Mona Lisa", "Leonardo da vinci"];

  function guesses() {
    if (guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess[0].toLowerCase().replace(/\s/g, '') || guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess[1].toLowerCase().replace(/\s/g, '')) {
      if (guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess[0].toLowerCase().replace(/\s/g, '')) {
        setArtOrArtist("artist");
      }
      else if (guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess[1].toLowerCase().replace(/\s/g, '')) {
        setArtOrArtist("art");
      };
      setIsCorrect(true);
      setGuess("");
    } else {
      // Wrong guess - update wrong guess tracking
      setWrongGuessesIndicator(true);
      setWrongGuesses(g => [...g, guess]);
      const newFailCount = failCount + 1;
      setFailCount(newFailCount);
      
      // Check if this was the third wrong guess
      if (newFailCount === 3) {
        setIsWrong(true);
      }
      
      setGuess("");
    }
  }
  function giveUp() {
    setIsWrong(true);
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
        {!isCorrect && !isWrong ? (<button className='next-round-button' onClick={giveUp}>GIVE UP?</button>) : (
        <button className='next-round-button' onClick={roundTwoOpen}>
          Next Round
        </button>
      )}
    </div>
  );
}

export default GuessInput;