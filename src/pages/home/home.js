import React from 'react';
import NavBar from '../header';
import './home.css';
import Me11thGrade from './Me11thGrade.jpg';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Home = (props) => {

  return (
    <div className = 'homeDiv'>

      <NavBar />

      <div
      style = {{width: '100%'}}
      margin = 'auto'>
        {/* <h1 className = 'homeHeader'>
          A Little Info About Me
        </h1> */}
        
        <Box
        display={ "inline-block" }
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        maxWidth = '750px'
        margin = '100px'>

          <Heading
          size = 'xl'
          position = 'relative'
          right = '40%'
          fontFamily = 'monospace'
          top = '0px'>
            Welcome
          </Heading>


          <br />
          <br />

          <Text
          className = 'introText'
          fontSize = 'xl'
          fontFamily = 'monospace'
          margin = '-40px'>
            Hello! My name is Wills Stern. I'm a junior at San Ramon Valley High School and working 
            on my Associate Degree in Computer Science from Diablo Valley College. Currently, I'm on 
            track to receive both by Spring 2022. My interests include programming, AI/ML, Uno R3 
            automation, and learning new technologies.
          </Text>
        </Box>


        <Box
        display={ "inline-block" }
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        maxWidth = '550px'
        margin = '50px'>

        <Image
          borderRadius = "full"
          position = 'relative'
          width = '250px'
          src = {Me11thGrade}
          top = '70px'
          alt = "Wills Stern"
        />

        </Box>

      </div>
      
    </div>
    )
};

export default Home;