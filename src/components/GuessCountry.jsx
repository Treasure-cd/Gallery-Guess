import React, { useState } from 'react'


const GuessCountry = () => {
    const [countryValue, setCountryValue] = useState("");
    const [wrongCountryGuess, setWrongCountryGuess] = useState([]);
    const [wrongCountryCount, setWrongCountryCount] = useState(0);
    const [overlayClassName, setOverlayClassName] = useState("")
function handleCountry(event) {
    setCountryValue(event.target.value);
}
const rightCountry = "Italy"
function countryGuess() {
    if (countryValue === rightCountry) {
        setOverlayClassName("overlay")
        setCountryValue("")
    }
    else {
        setWrongCountryGuess((g) => [...g, countryValue]);
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