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
        maxWidth = '790px'
        margin = '100px'>

          <Heading
          size = 'xl'
          position = 'relative'
          right = '45.5%'
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
          margin = '-50px'>
            Hey! My name is William Stern. I'm a freshman at UC Berkeley and am double majoring in Data Science (emphasis 
            in Business and Industrial Analytics) and Applied Mathematics (emphasis in Computer Science).
            <br />
            <br />
            This is my personal website that I made using ReactJS, which I've been maintaining since January 2021. Other 
            than that, I have my current resume (as of January 9th, 2023) on the "Resume" tab if you feel like checking 
            that out, or you can contact me via the "Contacts" tab.
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