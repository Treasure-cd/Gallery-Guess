import React, { useState } from 'react';

const GuessInput = ({ isCorrect, isWrong, setIsCorrect, setIsWrong }) => {
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [failCount, setFailCount] = useState(0);

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  const rightGuess = "Mona Lisa";

  function guesses() {
    if (guess.trim().toLowerCase().replace(/\s/g, '') === rightGuess.toLowerCase().replace(/\s/g, '')) {
      setIsCorrect(true);
    } else {
      setWrongGuesses(g => [...g, guess]);
      setFailCount(failCount + 1);
      if (failCount + 1 >= 3) {
        setIsWrong(true);
      }
    }
    setGuess("");
  }

  return (
    <div className='guess-container'>
      {!isCorrect && !isWrong ? (
        <>
          <div className='input-button'>
            <input
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
            </button>
          </div>
          <div>
            {wrongGuesses.map((wrongGuess, index) => (
              <div className='text-container' key={index}>
                <span className='text'>{wrongGuess}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <button className='next-round-button'>
          Next Round
        </button>
      )}
    </div>
  );
}

export default GuessInput;