import React, { useState } from "react";
import GamePageHeader from "./GamePageHeader";
import Image from "./Image";
import Footer from "./Footer";
import GuessInput from "./GuessInput";
import Options from "./Options";
import LongOptions from "./LongOptions";
import ArtEra from "./ArtEra";
import CurrentMuseum from "./CurrentMuseum";

const GamePage = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [roundTwo, setRoundTwo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track clicked option
  const [staticDivs, setStaticDivs] = useState(true);
  const [roundThreeButton, setRoundThreeButton] = useState(false);
  const [roundFourButton, setRoundFourButton] = useState(false);
  const [artOrArtist, setArtOrArtist] = useState("art");
  const rightAnswer = 4; // The correct answer index

  const rightOrWrong = () => {
    if (selectedOption === null) return; // Do nothing if no option is selected

    if (selectedOption === rightAnswer) {
      setCorrect(1); // Mark as correct
    } else {
      setCorrect(2); // Mark as wrong
    }

    setStaticDivs(false);
    setRoundThreeButton(true);
  };

  const startNextRound = () => {
    setRoundTwo(roundTwo + 1);
    setCorrect(0);
    setSelectedOption(null);
    setStaticDivs(true);
    setRoundThreeButton(false);
  };

  function giveUp() {
     // Do nothing if no option is selected

    if (selectedOption === rightAnswer) {
      setCorrect(1); // Mark as correct
    } else {
      setCorrect(2); // Mark as wrong
    }

    setStaticDivs(false);
    setRoundThreeButton(true);
  }
  return (
    <div className="container">
      <GamePageHeader />
      <main>
        {roundTwo === 0 ? (
          <>
          <h1 className="sentence-prompt">Try to guess the art or artist.</h1>
            <div className="image-container">
              <Image isCorrect={isCorrect} isWrong={isWrong} />
            </div>
            <GuessInput
              isCorrect={isCorrect}
              isWrong={isWrong}
              setIsCorrect={setIsCorrect}
              setIsWrong={setIsWrong}
              setRoundTwo={setRoundTwo}
              setArtOrArtist={setArtOrArtist}
            />
          </>
        ) : roundTwo === 1 ? (
          <>
            <h2 className="sentence-prompt"> Can you guess {artOrArtist === "art"? <span>the ART name?</span> : <span>the ARTIST?</span>}</h2>
            <Options
              correct={correct}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              staticDivs={staticDivs}
            />
            <div className="artist-button-container">
              <button onClick={rightOrWrong} className="artistButton">GUESS</button>
              {roundThreeButton ? (
                <button className='next-round-button' onClick={startNextRound}>NEXT ROUND</button>
              ) : <button className="next-round-button" onClick={giveUp}>GIVE UP</button>}
            </div>
          </>
        ) : roundTwo === 2 ? (
          <>

            <h2 className="sentence-prompt">What year period was it painted?</h2>
            <LongOptions setRoundFourButton={setRoundFourButton} roundFourButton={roundFourButton} setRoundTwo={setRoundTwo}></LongOptions>
            
          </>
        ) : roundTwo === 3 ? (
<>
<h2 className="sentence-prompt">What year period was it painted?</h2>
<ArtEra setRoundTwo={setRoundTwo}></ArtEra> </>) : roundTwo === 4 ? 

       (
        <CurrentMuseum></CurrentMuseum>
       ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;