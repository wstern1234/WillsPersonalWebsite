import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import Y1 from './Y1.JPG';

const Yosemite = () => {
  return (
    <div>
          
      <Heading
      size = 'xl'
      position = 'relative'
      fontFamily = 'monospace'
      top = '0px'>
        Yosemite
      </Heading>
          
      <SimpleGrid columns={1} spacing="40px">

        <Image
          position = 'relative'
          src = {Y1}
          alt = "Y1"
        />
        
      </SimpleGrid>

    </div>
  )
};

export default Yosemite;