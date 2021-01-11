import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import B1 from './B1.jpg';
import B2 from './B2.jpg';
import B3 from './B3.jpg';
import B4 from './B4.jpg';
import B5 from './B5.jpg';
import B6 from './B6.jpg';

const NewportBeach = () => {
  return (
    <div>

      <Heading
        size = 'xl'
        position = 'relative'
        fontFamily = 'monospace'
        top = '0px'>
          Beaches
      </Heading>
          
      <SimpleGrid columns={2} spacing="40px">
        
        <Image
          position = 'relative'
          src = {B1}
          alt = "B1"
        />

        <Image
          position = 'relative'
          src = {B2}
          alt = "B2"
        />

        <Image
          position = 'relative'
          src = {B3}
          alt = "B3"
        />

        <Image
          position = 'relative'
          src = {B4}
          alt = "B4"
        />

        <Image
          position = 'relative'
          src = {B5}
          alt = "B5"
        />

        <Image
          position = 'relative'
          src = {B6}
          alt = "B6"
        />
        
      </SimpleGrid>

    </div>
  )
};

export default NewportBeach;