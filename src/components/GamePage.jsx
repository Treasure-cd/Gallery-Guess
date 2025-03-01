import React from 'react'
import { useNavigate } from "react-router-dom";
import GamePageHeader from './GamePageHeader';
import Image from './Image';
import Footer from './Footer';
const GamePage = () => {
  return (
    <div className='container'>
        <GamePageHeader></GamePageHeader>
        <div className='image-container'>
            <Image></Image>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default GamePage