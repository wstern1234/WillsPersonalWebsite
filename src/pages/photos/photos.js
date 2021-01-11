import React from 'react';
import NavBar from '../header';
import NYC from './Photos/NYC/NYC';
import Beaches from './Photos/Beaches/Beaches';
import StanfordFB from './Photos/StanfordFootball/StanfordFB';
import WashingtonDC from './Photos/WashingtonDC/WashingtonDC';
import Yosemite from './Photos/Yosemite/Yosemite';

const photos = () => {
  return (
    <div>
      <NavBar />
          
      <NYC />
      <Beaches />
      <StanfordFB />
      <WashingtonDC />
      <Yosemite />

    </div>
  )
};

export default photos;