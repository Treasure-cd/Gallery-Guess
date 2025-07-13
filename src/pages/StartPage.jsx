import React from 'react';
import Header from '../components/Header';
import BlurImage from '../components/BlurImage';
import Footer from '../components/Footer';


const StartPage = () => {

  return (
    <div className='container'>
    <Header></Header>
    <div className='sentence-prompt-container'><p className='sentence-prompt'>Guess all about the artwork in a very riveting three minutes.</p></div>
    <div className='image-container'>
    <BlurImage />
    </div>
    <Footer></Footer>
</div>
  );
};

export default StartPage;
