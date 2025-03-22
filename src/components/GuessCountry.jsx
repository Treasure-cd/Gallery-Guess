import React, { useState } from 'react'


const GuessCountry = () => {
    const [countryValue, setCountryValue] = useState("");
    const [wrongCountryGuess, setWrongCountryGuess] = useState([]);
    const [wrongCountryCount, setWrongCountryCount] = useState(0);
    const [overlayClassName, setOverlayClassName] = useState("");
    const [inputLock, setInputLock] = useState(true);
function handleCountry(event) {
    setCountryValue(event.target.value);
}
const rightCountry = "Italy"
function countryGuess() {
    if (countryValue === rightCountry) {
        setOverlayClassName("overlay");
        setCountryValue("");
        setInputLock(false);
    }
    else {
        setWrongCountryCount(wrongCountryCount + 1);
        setWrongCountryGuess((g) => [...g, countryValue]);
        setCountryValue("");
        console.log(wrongCountryCount);
        if (wrongCountryCount > 1) {
            setInputLock(false);
            setOverlayClassName("overlay-wrong")
        } 
    }
}
  return (
    <div className='guess-country-container'>
        <h3>Can you guess the artist's geographical background</h3>
        <div className='overlay-container'>
            <img src="/5268732c91595cd7fb03e35e77de45f9.jpg" alt="" />
            <div className={overlayClassName}></div>
        </div>
        <div className='input-country-container'>
            {
                inputLock ? (
          <>
                    <input
                    type="text" 
                    className='guess-country'
                    placeholder='Guess the artists country'
                    value={countryValue}
                    onChange={handleCountry}
                    />  
                       <button className='guess-country-btn' onClick={countryGuess}>
                        GUESS
                     </button>
          </>
                ) : (
                    <>
                    <input
                    type="text" 
                    className='guess-country'
                    placeholder='Guess the artists country'
                    value={countryValue}
                    />
                    <button className='guess-country-btn' onClick={countryGuess}>GUESS</button>
                    </>
                )
            }
            <div>
                {wrongCountryGuess.map((wrongCountry, indexCountry) => (
                    <div className='country' key={indexCountry}>
                        {wrongCountry}
                    </div>
  ))}
                    
                
            </div>
        </div>
    </div>
  )
}

export default GuessCountry