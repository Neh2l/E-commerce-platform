import React from 'react'
import errorImg from '../assets/logo1 1.png'
import { Box, Container, Typography } from '@mui/material'
const Error = () => {
  return (
    <Container sx={

        {
     display: "flex",
    flexDirection: "column",
    alignItems: "center",     
    justifyContent: "center", 
    textAlign: "center",
    minHeight: "100vh",  

        }
    }>
      <Box >
        <Box >
        <img src={errorImg} alt="" />
      </Box>
   <Box>
       <Typography variant='h3'>
        Error This page not found
      </Typography>
       <Typography variant='caption' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </Typography>
   </Box>
      </Box>
    </Container>
  )
}

export default Error
