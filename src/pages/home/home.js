import React from 'react';
import NavBar from '../header';
import './home.css';
import WillsMainPhoto2 from './WillsMainPhoto2.png';
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
            Welcome!
          </Heading>


          <br />
          <br />

          <Text
          className = 'introText'
          fontSize = 'xl'
          fontFamily = 'monospace'
          margin = '-40px'>
            Hey! My name is William Stern. I'm a freshman at UC Berkeley and am double majoring in Computer Science 
            and Applied Mathematics. This is my personal website that I made using ReactJS, which I've been maintaining 
            since January 2021. Other than that, I have my current resume (as of October 6th, 2022) on the "Resume" 
            tab if you feel like checking that out, or you can contact me via the "Contacts" tab.
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
          src = {WillsMainPhoto2}
          top = '70px'
          alt = "Wills Stern"
        />

        </Box>

      </div>
      
    </div>
    )
};

export default Home;