import React, { useState } from "react";
import GuessCountry from "./GuessCountry";
import Header from "./Header";
const LongOptions = ({ setRoundFourButton, roundFourButton, setRoundTwo }) => {
  const [yearCorrect, setYearCorrect] = useState(true); //for render of option
  const [selectedOption, setSelectedOption] = useState(null); //to track option that was selected, probably for animation purposes
  const [countryGiveUp, setCountryGiveUp] = useState(false);
  const correctOption = 2; //correct option (3)

  const checkCorrect = (index) => {
    setSelectedOption(index);
    setYearCorrect(false);
  }

  const nextRound = () => {
    setRoundTwo(3);
  }
  function giveUp() {
     setYearCorrect(false);
  }
  function giveUpCountryAnswer() {
    setCountryGiveUp(true);
  }
  return (
    
    <>

      {yearCorrect ? (
        <>
        <div className='long-option-container'>
          {[0, 1, 2, 3].map((startLongIndex) => (
            <div
              className='long-option'
              key={startLongIndex}
            onClick={() => checkCorrect(startLongIndex)} //the onClick only exists here. Because we're clicking here first, taking index(the parameter) as startLongIndex
            >
              {startLongIndex + 1}
            </div>
          ))}
          
        </div>
       <button className="next-round-button" onClick={giveUp}>GIVE UP</button> 
       </>
      ) : (

        <div className='long-option-container'>
          {[0, 1, 2, 3].map((startLongIndex) => {
            let className = "long-option";
            if (startLongIndex === correctOption) {
              className = 'long-option correct';
            } else {
              className = 'long-option wrong';
            }
            return (
              <>
              <div className={className} key={startLongIndex}>
                {startLongIndex + 1}
              </div>
            
              
</>
            );
 })}
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><button className="next-round-button">GIVE UP</button> </div>
          <GuessCountry setRoundFourButton={setRoundFourButton} countryGiveUp={countryGiveUp}></GuessCountry>
          {roundFourButton ? (
            <button className="round-four-button" onClick={nextRound}>
              NEXT ROUND 
            </button>
          ) : ( <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><button className="next-round-button" onClick={giveUpCountryAnswer}>GIVE UP</button> </div>)}

        </div>
      )  }
    </>
  );
}

export default LongOptions;