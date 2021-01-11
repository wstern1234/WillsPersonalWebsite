import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import './header.css';

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show] = React.useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#009EDB"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Heading as="h1" size="lg" letterSpacing={"-.01rem"} _hover={{color: "#DCDCDC"}}>
            Wills Stern
          </Heading>
        </Link>
      </Flex>

      <Menu>
        <MenuButton
        as={Button}
        variant='outline'
        display={{ base: "block", md: "none" }}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList bgColor = '#009EDB'>
          <Link to="/">
            <MenuItem _hover={{color: "#DCDCDC", bgColor: '#009EDB'}}>Home</MenuItem>
          </Link>
          <Link to="/contacts">
            <MenuItem _hover={{color: "#DCDCDC", bgColor: '#009EDB'}}>Contacts</MenuItem>
          </Link>
          <Link to="/resume">
            <MenuItem _hover={{color: "#DCDCDC", bgColor: '#009EDB'}}>Resume</MenuItem>
          </Link>
          <Link to="/photos">
            <MenuItem _hover={{color: "#DCDCDC", bgColor: '#009EDB'}}>Photos</MenuItem>
          </Link>
        </MenuList>
      </Menu>



      <Box
        className = 'navButtons'
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center">

        <Link to="/">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Home</Button>
        </Link>
        <Link to="/contacts">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Contacts</Button>
        </Link>
        <Link to="/resume">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Resume</Button>
        </Link>
        <Link to="/photos">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Photos</Button>
        </Link>
      
      </Box>
    </Flex>
  );
};

export default Header;
