import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import WDC1 from './WDC1.JPG';
import WDC2 from './WDC2.JPG';

const WashingtonDC = () => {
  return (
    <div>
          
      <Heading
      size = 'xl'
      position = 'relative'
      fontFamily = 'monospace'
      top = '0px'>
        Washington DC
      </Heading>
          
      <SimpleGrid columns={2} spacing="40px">

        <Image
          position = 'relative'
          src = {WDC1}
          alt = "WDC1"
        />

        <Image
          position = 'relative'
          src = {WDC2}
          alt = "WDC2"
        />
        
      </SimpleGrid>

    </div>
  )
};

export default WashingtonDC;