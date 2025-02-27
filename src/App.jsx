import React from 'react';
import './App.css'
import Header from './components/Header';
import BlurImage from './components/BlurImage';
import Image from './components/Image';
import { useState } from 'react';

const App = () => {
  const [showNormal, setShowNormal] = useState(false);

  return (
    <div className='container'>
    <Header></Header>
    <div><p className='sentence-prompt'>Guess all about the artwork in a very riveting three minutes.</p></div>
    <div className='image-container'>
    {showNormal ? <Image /> : <BlurImage onClick={() => setShowNormal(true)} />}
    </div>
</div>
  );
};

export default App;
