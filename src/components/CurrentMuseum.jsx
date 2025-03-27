import React, { useState } from "react";

const museumCards = [
    { id: 1, image: "/Expressionism-300x300.jpg" },
    { id: 2, image: "/impression-sunrise-courtesy-of-musee-marmottan-uai-600x337-1.jpg" },
    { id: 3, image: "/Poussin_Nicolas_-_Paysage_avec_Orion_aveugle_cherchant_le_soleil_-_1658.jpg" },
    { id: 4, image: "/Expressionism-300x300.jpg" },
    { id: 5, image: "/Poussin_Nicolas_-_Paysage_avec_Orion_aveugle_cherchant_le_soleil_-_1658.jpg" },
    { id: 6, image: "/impression-sunrise-courtesy-of-musee-marmottan-uai-600x337-1.jpg" },
]

const CurrentMuseum = () => {
    
    const [eraIsCorrect, setEraIsCorrect] = useState(true);
    const [clickedEra, setClickedEra] = useState(null);
    
    const handleClick = (id) => {
      setClickedEra(id);
      setEraIsCorrect(false);
    };

    return (
  eraIsCorrect ? (
        <div className="grid-container-museum">
      {museumCards.map((mCard) => (
        <div
          key={mCard.id}
          className="card"
          style={{ backgroundImage: `url(${mCard.image})` }} 
          onClick={() => handleClick(mCard.id)}
        ></div>
      ))}
    </div>
  ) : (
    <>
         <div className="grid-container-museum">
      {museumCards.map((mCard) => (
       
                <div
          key={mCard.id}
          className="card"
          style={{ backgroundImage: `url(${mCard.image})` }} 
          
        >
      <div className={
        mCard.id === 3 ?  //update answer here
        "border-overlay correct" :
        "border-overlay wrong"
      }
      >
      
       
      </div>
        </div>
  
        
      ))}
      
    </div>
      <p>GAME FINISHED</p>
</>

   


  )


  );
};

export default CurrentMuseum