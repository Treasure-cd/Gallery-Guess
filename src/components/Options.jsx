import { useState } from "react";

const Options = ({ correct, selectedOption, setSelectedOption }) => {
  const handleClick = (index) => {
    setSelectedOption(index); // Update selected option in GamePage
  };

  return (
    <div className="options-container">
      {[0, 2, 4].map((startIndex) => (
        <div className="row" key={startIndex}>
          {[0, 1].map((offset) => {
            const index = startIndex + offset;

            let className = "option";
            if (selectedOption === index) {
              className = "option selected"; // Default when clicked but not confirmed
            }
            if (correct === 1 && selectedOption === index) {
              className = "option correct"; // Green for correct answer
            } else if (correct === 2 && selectedOption === index) {
              className = "option wrong"; // Red for wrong answer
            }

            return (
              <div
                key={index}
                className={className}
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Options;
