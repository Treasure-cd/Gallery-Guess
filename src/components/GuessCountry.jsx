import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const GuessCountry = ({ setRoundFourButton, countryGiveUp }) => {
    const [countryValue, setCountryValue] = useState("");
    const [wrongCountryGuess, setWrongCountryGuess] = useState([]);
    const [wrongCountryCount, setWrongCountryCount] = useState(0);
    const [overlayClassName, setOverlayClassName] = useState("");
    const [inputLock, setInputLock] = useState(true);
    const [wrongGuessesIndicatorPainter, setWrongGuessesIndicatorPainter] = useState(false);

    // Handle give up functionality
    useEffect(() => {
        if (countryGiveUp) {
            setInputLock(false);
            setOverlayClassName("overlay-wrong");
            setRoundFourButton(true);
        }
    }, [countryGiveUp, setRoundFourButton]);

    function handleCountry(event) {
        setCountryValue(event.target.value);
    }

    const rightCountry = "Italy"

    function countryGuess() {
        if (countryValue.trim().toLowerCase().replace(/\s/g, '') === rightCountry.toLowerCase().replace(/\s/g, '')) {
            setOverlayClassName("overlay");
            setCountryValue("");
            setInputLock(false);
            setRoundFourButton(true);
        }
        else {
            setWrongGuessesIndicatorPainter(true);
            const newWrongCount = wrongCountryCount + 1;
            setWrongCountryCount(newWrongCount);
            setWrongCountryGuess((g) => [...g, countryValue]);
            setCountryValue("");
            console.log(newWrongCount);
            if (newWrongCount > 1) {
                setInputLock(false);
                setOverlayClassName("overlay-wrong");
                setRoundFourButton(true);
            } 
        }
    }

    return (
        <div className='guess-country-container'>
            <h3 className="sentence-prompt">Can you guess the artist's geographical background</h3>
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
                            <button className='guess-country-btn'>GUESS</button>
                        </>
                    )
                }
                <div>
                    {wrongGuessesIndicatorPainter ? (<p className='guess-country-indicator'>Wrong Guesses <FontAwesomeIcon icon={faXmark} className='Xmark-icon'/></p>) : (null)}
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