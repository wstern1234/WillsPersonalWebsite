import React from 'react';
import { SimpleGrid, Heading, Image } from "@chakra-ui/react";
import NYC1 from './NYC1.jpg';
import NYC2 from './NYC2.jpg';
import NYC3 from './NYC3.jpg';
import NYC4 from './NYC4.jpg';
import NYC5 from './NYC5.jpg';
import NYC6 from './NYC6.jpg';
import NYC7 from './NYC7.jpg';
import NYC8 from './NYC8.jpg';
import NYC9 from './NYC9.jpg';
import NYC10 from './NYC10.jpg';
import NYC11 from './NYC11.jpg';
import NYC12 from './NYC12.jpg';
import NYC13 from './NYC13.jpg';
import NYC14 from './NYC14.jpg';
import NYC15 from './NYC15.jpg';

const NYC = () => {
  return (
    <div>

      <br />
      <br />

      <Heading
        size = 'xl'
        position = 'relative'
        fontFamily = 'monospace'
        top = '0px'>
          New York (Mostly Manhattan)
      </Heading>

      <br />
          
      <SimpleGrid columns={3} spacing="40px">

          <Image
            position = 'relative'
            src = {NYC1}
            alt = "NYC1"
          />

          <Image
            position = 'relative'
            src = {NYC2}
            alt = "NYC2"
          />

          <Image
            position = 'relative'
            src = {NYC3}
            alt = "NYC3"
          />

          <Image
            position = 'relative'
            src = {NYC4}
            alt = "NYC4"
          />

          <Image
            position = 'relative'
            src = {NYC5}
            alt = "NYC5"
          />

          <Image
            position = 'relative'
            src = {NYC6}
            alt = "NYC6"
          />

          <Image
            position = 'relative'
            src = {NYC7}
            alt = "NYC7"
          />

          <Image
            position = 'relative'
            src = {NYC8}
            alt = "NYC8"
          />

          <Image
            position = 'relative'
            src = {NYC9}
            alt = "NYC9"
          />

          <Image
            position = 'relative'
            src = {NYC10}
            alt = "NYC10"
          />

          <Image
            position = 'relative'
            src = {NYC11}
            alt = "NYC11"
          />

          <Image
            position = 'relative'
            src = {NYC12}
            alt = "NYC12"
          />

          <Image
            position = 'relative'
            src = {NYC13}
            alt = "NYC13"
          />

          <Image
            position = 'relative'
            src = {NYC14}
            alt = "NYC14"
          />

          <Image
            position = 'relative'
            src = {NYC15}
            alt = "NYC15"
          />
        
      </SimpleGrid>

    </div>
  )
};

export default NYC;