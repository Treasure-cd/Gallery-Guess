import React from 'react';
import Header from './Header';
import BlurImage from './BlurImage';
import Image from './Image';
import { useNavigate } from "react-router-dom";


const StartPage = () => {



  return (
    <div className='container'>
    <Header></Header>
    <div><p className='sentence-prompt'>Guess all about the artwork in a very riveting three minutes.</p></div>
    <div className='image-container'>
    <BlurImage></BlurImage>
    </div>
</div>
  );
};

export default StartPage;
