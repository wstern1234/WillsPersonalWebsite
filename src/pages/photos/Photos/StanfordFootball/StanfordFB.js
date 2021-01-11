import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import Stanford1 from './Stanford1.jpg';
import Stanford2 from './Stanford2.jpg';
import Stanford3 from './Stanford3.jpg';
import Stanford4 from './Stanford4.jpg';
import Stanford5 from './Stanford5.jpg';
import Stanford6 from './Stanford6.jpg';
import Stanford7 from './Stanford7.jpg';
import Stanford8 from './Stanford8.jpg';
import Stanford9 from './Stanford9.jpg';
import Stanford10 from './Stanford10.jpg';

const StanfordFB = () => {
  return (
    <div>
          
      <Heading
      size = 'xl'
      position = 'relative'
      fontFamily = 'monospace'
      top = '0px'>
        Stanford Football
      </Heading>
          
      <SimpleGrid columns={2} spacing="40px">

        <Image
          position = 'relative'
          src = {Stanford1}
          alt = "Stanford1"
        />

        <Image
          position = 'relative'
          src = {Stanford2}
          alt = "Stanford2"
        />

        <Image
          position = 'relative'
          src = {Stanford3}
          alt = "Stanford3"
        />

        <Image
          position = 'relative'
          src = {Stanford4}
          alt = "Stanford4"
        />

        <Image
          position = 'relative'
          src = {Stanford5}
          alt = "Stanford5"
        />

        <Image
          position = 'relative'
          src = {Stanford6}
          alt = "Stanford6"
        />

        <Image
          position = 'relative'
          src = {Stanford7}
          alt = "Stanford7"
        />

        <Image
          position = 'relative'
          src = {Stanford8}
          alt = "Stanford8"
        />

        <Image
          position = 'relative'
          src = {Stanford9}
          alt = "Stanford9"
        />

        <Image
          position = 'relative'
          src = {Stanford10}
          alt = "Stanford10"
        />
        
      </SimpleGrid>

    </div>
  )
};

export default StanfordFB;