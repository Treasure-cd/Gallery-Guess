import React, { useState } from "react";
import GuessCountry from "./GuessCountry";
import Header from "./Header";
const LongOptions = () => {
  const [yearCorrect, setYearCorrect] = useState(true); //for render of option
  const [selectedOption, setSelectedOption] = useState(null); //to track option that was selected, probably for animation purposes
  const correctOption = 2; //correct option (3)

  const checkCorrect = (index) => {
    setSelectedOption(index);
    setYearCorrect(false);
  }

  return (
    
    <>

      {yearCorrect ? (
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
          <GuessCountry></GuessCountry>
        </div>
      )  }
    </>
  );
}

export default LongOptions;