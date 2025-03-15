import React, { useState } from 'react';
import GamePageHeader from './GamePageHeader';
import Image from './Image';
import Footer from './Footer';
import GuessInput from './GuessInput';
import Options from './Options';

const GamePage = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [roundTwo, setRoundTwo] = useState(true);


  return (
    <div className='container'>
               <GamePageHeader />
      <main>

      {roundTwo ? (
        <>
          <div className='image-container'> 
            <Image isCorrect={isCorrect} isWrong={isWrong} />
          </div>
          <GuessInput 
            isCorrect={isCorrect} 
            isWrong={isWrong}
            setIsCorrect={setIsCorrect} 
            setIsWrong={setIsWrong} 
            setRoundTwo={setRoundTwo}
          />
        </>  
      ) : (
        <> 
               <h2 className='painter-prompt'>Who was the artist?</h2>
               <Options></Options>
               <button>GUESS</button>
        </>
      )}
   
      </main>   
         <Footer />
           </div>
  
  );
}

export default GamePage;