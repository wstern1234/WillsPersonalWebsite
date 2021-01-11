import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import SF1 from './SF1.jpg';
import SF2 from './SF2.jpg';

const SanFrancisco = () => {
  return (
    <div>
          
      <Heading
      size = 'xl'
      position = 'relative'
      fontFamily = 'monospace'
      top = '0px'>
        San Francisco
      </Heading>
          
      <SimpleGrid columns={2} spacing="40px">

        <Image
          position = 'relative'
          src = {SF1}
          alt = "SF1"
        />

        <Image
          position = 'relative'
          src = {SF2}
          alt = "SF2"
        />
        
      </SimpleGrid>

    </div>
  )
};

export default SanFrancisco;