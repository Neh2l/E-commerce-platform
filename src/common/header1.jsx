import React, { useContext } from "react";
import { ColorModeContext } from "../component/theme"; 
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useState} from 'react'

const options = [
  

  'EN',
  'AR',
];

export  function SimpleListMenu() {
  const [anchorEl, setAnchorEl] =useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event ,index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{}}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
< Box sx={

    {
        bgcolor:"#283445"
    }
}>
    <Container>
    
    <Stack direction={"row"} alignItems={"center"}>

        
    <Typography sx={
{
    // mr:"4px 5px",
    p:"3px 10px",
    bgcolor:"red",
    // background:"error",
    borderRadius:"8PX",
    fontWeight:"bold"

}


    }
    variant="body2"
    >

hot
    </Typography>

    <Typography sx={
{
    mr:2,
    p:"3px 10px",
    bgcolor:"",
    borderRadius:"8px",
    fontWeight:"bold"

}


    }
    variant="body2"
    >

find all your needs now
    </Typography>
  

<Box flexGrow={1}></Box>


<SimpleListMenu/>
   <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem("mode", "dark");
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem("mode", "light");
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined />
        </IconButton>
      )}
    </div>

    
<InstagramIcon sx={
    {
        margin:"3px"
    }
}
/>
<FacebookIcon sx={
    {
        margin:"3px"
    }
}
/>
<TwitterIcon sx={
    {
        margin:"3px"
    }
}/>
      </Stack>
    </Container>

</Box>
  );
};
export default Header1

