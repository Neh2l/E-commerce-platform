import { Box, Container, Stack, Typography,Button } from '@mui/material'
import React from 'react'
import DiamondIcon from "@mui/icons-material/Diamond";
import TextField from '@mui/material/TextField';



const Footer = () => {
  return (
<Box sx={{
    bgcolor:"#283445",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"30vh",
    mt:"4rem"
  }}>
    <Container >
        <Stack direction={"row"} sx={{
          alignItems:"center",
          gap:"4rem"
              
  
        }}>
          <Box>
            <DiamondIcon sx={{fontSize:"3rem"}}/>
            <Typography variant='h4'>Ovela

            </Typography>
            
            
             <Typography>
              Lorem ipsum dolor sit amet 
             </Typography>
          </Box>
           <Box>
            <Typography>
              Quick links
            </Typography>
            <Typography >
             Home
            </Typography>
            <Typography>
              signUp
            </Typography>
            <Typography>
              login 
            </Typography>

           </Box>
            <Box>

                  <Typography>
             Contact us
            </Typography>
            <Typography >
             0213565654
            </Typography>
            <Typography>
              ovela123@yahoo.com
            </Typography>
            <Typography>
              32,nasr street,Egypt
            </Typography>
            </Box>
                        <Box sx={
                          {
                            display:"flex",
                            flexDirection:"column",
                            gap:"2rem"
                          }
                        }>

             
                <Box sx={{ width: 500, maxWidth: '100%' }}>
                  <TextField fullWidth label="comment" id="msg" />
                </Box>
                 <Button variant="contained" sx={{ width: 500, maxWidth: '100%'}}>send</Button>
            
                 
                
            </Box>

        </Stack>
         <Stack></Stack>


  </Container>
</Box>
  )
}

export default Footer
