import React, { useState } from 'react';
import GamePageHeader from './GamePageHeader';
import Image from './Image';
import Footer from './Footer';
import GuessInput from './GuessInput';

const GamePage = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const resetGame = () => {
    setIsCorrect(false);
    setIsWrong(false);
    // Reset other necessary states if needed
  };

  return (
    <div className='container'>
      <GamePageHeader />
      <div className='image-container'>
        <Image isCorrect={isCorrect} isWrong={isWrong} />
      </div>
      <GuessInput 
        isCorrect={isCorrect} 
        isWrong={isWrong}
        setIsCorrect={setIsCorrect} 
        setIsWrong={setIsWrong} 
        resetGame={resetGame}
      />
      <Footer />
    </div>
  );
}

export default GamePage;