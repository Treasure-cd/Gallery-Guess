import React, { useState } from "react";
import GamePageHeader from "./GamePageHeader";
import Image from "./Image";
import Footer from "./Footer";
import GuessInput from "./GuessInput";
import Options from "./Options";

const GamePage = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [roundTwo, setRoundTwo] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track clicked option

  const rightAnswer = 4; // The correct answer index

  const rightOrWrong = () => {
    if (selectedOption === null) return; // Do nothing if no option is selected

    if (selectedOption === rightAnswer) {
      setCorrect(1); // Mark as correct
    } else {
      setCorrect(2); // Mark as wrong
    }
  };

  return (
    <div className="container">
      <GamePageHeader />
      <main>
        {roundTwo ? (
          <>
            <div className="image-container">
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
            <h2 className="painter-prompt">Who was the artist?</h2>
            <Options 
              correct={correct} 
              selectedOption={selectedOption} 
              setSelectedOption={setSelectedOption} 
            />
            <button onClick={rightOrWrong}>GUESS</button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
