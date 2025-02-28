import React from 'react'
import { useNavigate } from "react-router-dom";
import GamePageHeader from './GamePageHeader';
import Image from './Image';

const GamePage = () => {
  return (
    <div className='container'>
        <GamePageHeader></GamePageHeader>
        <div className='image-container'>
            <Image></Image>
        </div>
    </div>
  )
}

export default GamePage