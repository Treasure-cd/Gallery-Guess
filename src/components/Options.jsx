import { useState } from "react";
const Options = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Tracks the clicked div

    const handleClick = (index) => {
      setActiveIndex(index); // Update state with the clicked div index
    };
    
  return (
    <div className='options-container'>  
   
   {[0, 2, 4].map((startIndex) => (
        <div className="row" key={startIndex}>
          {[0, 1].map((offset) => {
            const index = startIndex + offset;
            return (
              <div
                key={index}
                className={activeIndex === index ? "option selected" : "option"}
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      ))} 
        </div> 

  )
}

export default Options