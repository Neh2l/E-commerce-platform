import { Box, Button, Container, Stack, Typography, TextField } from '@mui/material'
import React from 'react'
import DiamondIcon from "@mui/icons-material/Diamond";

const Footer = () => {
  return (
<Box sx={{
    bgcolor:"#283445",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    mt:"4rem",
    py:"2rem",
    color:"white"
  }}>
    <Container>
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          sx={{ alignItems:"center", gap:{ xs:"2rem", md:"4rem" }, textAlign:{ xs:"center", md:"left" } }}
        >
          <Box>
            <DiamondIcon sx={{fontSize:"3rem"}}/>
            <Typography variant='h4'>Ovela</Typography>
            <Typography>Lorem ipsum dolor sit amet</Typography>
          </Box>

           <Box>
            <Typography>Quick links</Typography>
            <Typography>Home</Typography>
            <Typography>signUp</Typography>
            <Typography>login</Typography>
           </Box>

            <Box>
              <Typography>Contact us</Typography>
              <Typography>0213565654</Typography>
              <Typography>ovela123@yahoo.com</Typography>
              <Typography>32,nasr street,Egypt</Typography>
            </Box>

            <Box sx={{ display:"flex", flexDirection:"column", gap:"1rem", width:"100%" }}>
                <TextField fullWidth label="comment" id="msg" />
                <Button variant="contained" fullWidth>send</Button>
            </Box>
        </Stack>
    </Container>
</Box>
  )
}

export default Footer
