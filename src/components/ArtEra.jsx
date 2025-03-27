import React, { useState } from "react";

const cards = [
  { id: 1, image: "/Expressionism-300x300.jpg" },
  { id: 2, image: "/impression-sunrise-courtesy-of-musee-marmottan-uai-600x337-1.jpg" },
  { id: 3, image: "/Poussin_Nicolas_-_Paysage_avec_Orion_aveugle_cherchant_le_soleil_-_1658.jpg" },
  { id: 4, image: "/Expressionism-300x300.jpg" },
  { id: 5, image: "/Poussin_Nicolas_-_Paysage_avec_Orion_aveugle_cherchant_le_soleil_-_1658.jpg" },
  { id: 6, image: "/impression-sunrise-courtesy-of-musee-marmottan-uai-600x337-1.jpg" },
  { id: 7, image: "/Expressionism-300x300.jpg" },
  { id: 8, image: "/Expressionism-300x300.jpg" },
];


const ArtEra = ({ setRoundTwo }) => {
const [eraIsCorrect, setEraIsCorrect] = useState(true);
const [clickedEra, setClickedEra] = useState(null);

const handleClick = (id) => {
  setClickedEra(id);
  setEraIsCorrect(false);
};

const finalRound = () => {
  setRoundTwo(4);
}
    return (
  eraIsCorrect ? (
        <div className="grid-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundImage: `url(${card.image})` }} 
          onClick={() => handleClick(card.id)}
        ></div>
      ))}
    </div>
  ) : (
    <>
         <div className="grid-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundImage: `url(${card.image})` }} 
          
        >
      <div className={
        card.id === 7 ?  //update answer here
        "border-overlay correct" :
        "border-overlay wrong"
      }
      >
       
      </div>
        </div>

      ))}
      
    </div>
    <button className="round-four-button" onClick={finalRound}>FINAL ROUND</button>
    </>


  )


  );
};

export default ArtEra;