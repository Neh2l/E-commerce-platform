import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import proImg from '../../assets/profile-removebg-preview.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router';

const Profile = () => {
  let navigate=useNavigate();
  return (

    <Box>
       <IconButton onClick={()=>{navigate('/')}}>
          <ArrowCircleLeftIcon sx={
            {
              fontSize:"3rem",
              m:"1rem"
            }
          }/>
        </IconButton> 
    <Container sx={{ py: 4 }}>

      <Typography variant="h4" textAlign="center" mb={3}>
        Profile
      </Typography>

      <Stack 
        direction={{ xs: "column", md: "row" }} 
        spacing={1}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          flex: 1,
          border: "1px solid gray",
          p: "1rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius:".4rem"
        }}>
          <Box sx={{bgcolor:"white",borderRadius:"50%", width:"250px", height:"250px"} }>
            <img 
              src={proImg} 
              alt="profile" 
              style={{ maxWidth: "200px", width: "100%", borderRadius: "50%" }} 
            />
          </Box>
          <Typography variant='h5'>
            selien malak
          </Typography>
          <Typography variant='caption'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates dolorum corrupti quae ex.
          </Typography>

          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center"
          >
            <FacebookIcon/>
            <TwitterIcon />
            <InstagramIcon />
            <WhatsAppIcon/>
          </Stack>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: 1,
          border: "1px solid gray",
          p: "1rem",
                    borderRadius:".4rem"

        }}>
          <Typography variant='h5' textAlign={{ xs: "center", md: "left" }}>
            Bio & other details
          </Typography>

          <Typography variant='caption'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates dolorum corrupti quae ex.
          </Typography>

          <Typography variant='h6'>My name</Typography>
          <Typography variant='caption'>selien malak</Typography>

          <Typography variant='h6'>Email</Typography>
          <Typography variant='caption'>selienmalak1111@gmail.com</Typography>

          <Typography variant='h6'>Address</Typography>
          <Typography variant='caption'>321, nasr street, cairo</Typography>

          <Typography variant='h6'>About</Typography>
          <Typography variant='caption'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ex vel unde rerum cum commodi.
          </Typography>

          <Button variant="contained" color="error" sx={{ mt: 2, alignSelf: { xs: "center", md: "flex-start" } }}>
            Edit your details
          </Button>
        </Box>
      </Stack>
    </Container>
    </Box>
  )
}

export default Profile
