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
        maxWidth = '839px'
        margin = '100px'>

          <Heading
          size = 'xl'
          position = 'relative'
          right = '47%'
          fontFamily = 'monospace'
          top = '0px'>
            Hello!
          </Heading>


          <br />
          <br />
          <br />
          <br />

          <Text
          className = 'introText'
          fontSize = 'xl'
          fontFamily = 'monospace'
          margin = '-49px'>
            My name is William 'Wills' Stern. I'm a student at UC Berkeley, double majoring in
            Computer Science and Data Science with an emphasis in Business.
            <br />
            <br />
            <br />
            I programmed this site using ReactJS and I've been maintaining it since 
            January 2021. Other than that, I have my current 
            <a href="https://wills-stern.com/#/resume"><span style={{ color: '#009EDB'}}> <u>resume</u> </span></a> 
            available and you can 
            <a href="https://wills-stern.com/#/contacts"><span style={{ color: '#009EDB'}}> <u>reach out</u> </span></a> 
            to me through Linkedin, Twitter, or email.
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
