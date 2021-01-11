import React from 'react';
import NavBar from '../header';
import { SimpleGrid, Heading, Text, Button } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const contacts = () => {
  return (
    <div position = 'relative' width = '100%'>
      <NavBar />

      <br />
      <br />

      <Heading
      size = 'xl'
      position = 'relative'
      fontFamily = 'monospace'
      top = '0px'>
        My Contacts
      </Heading>

      <br />

      <Text fontSize = 'lg' fontFamily = 'monospace'>Below, you can contact me via Linkedin, Twitter, or my business email.</Text>

      <br />

      <SimpleGrid position = 'relative' top = '40px' spacing = '40px'>

          
        <a href = 'https://www.linkedin.com/in/wills-stern-5a2a621b1/' rel="noreferrer" target = '_blank' action = 'https://www.linkedin.com/in/wills-stern-5a2a621b1/'>
          <Button colorScheme="linkedin" variant = 'outline' leftIcon={<FaLinkedin />} width = '60%'>
            Linkedin
          </Button>
        </a>


        <a href = 'https://twitter.com/wstern231' rel="noreferrer" target = '_blank' action = 'https://twitter.com/wstern231'>
          <Button colorScheme="twitter" variant = 'outline' leftIcon={<FaTwitter />} width = '60%'>
            Twitter
          </Button>
        </a>


        <a href = 'mailto:wills.stern234@gmail.com' action = 'mailto:wills.stern234@gmail.com'>
          <Button colorScheme="black" variant = 'outline' leftIcon={<HiOutlineMail />} width = '60%'>
            Email
          </Button>
        </a>

      </SimpleGrid>
      
    </div>
  )
};

export default contacts;