import { Container, Typography, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as z from "zod";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Signup from './signup';



const schema = z.object({
  email: z.string().email("invalid email!"),
  password: z.string().min(6, "password is weak"),
});

const Login = () => {
  let navigate=useNavigate()

  const [formData, setFormData] = useState({ email: "", password: "" })
  const [formErrors, setFormErrors] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      setFormErrors({ email: "", password: "" });
      toast.success("login Success!", {
        position: "top-center",
        autoClose: 2000,
       
      });
      setTimeout(() => {
        navigate('/profile')
      }, 3000);
    }catch (err) {
  if (err) {
    const formattedErrors = { email: "", password: "" }
    err.issues.forEach(error => {   
      formattedErrors[error.path[0]] = error.message;
    });
    setFormErrors(formattedErrors);
    toast.error("please try again", {
      position: "bottom-right",
      autoClose: 3000,
    });
  } else {
    console.error(err); 
  }
}
  }

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
    <Container
      sx={{
        background: "#283445",
        padding: "3rem",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 4px gray",
        mt: "3rem",
        color:"white"
      }}
    >
      <Box>
        <Typography variant='h4'>
          Welcom to Ovela
        </Typography>
        <Typography variant='caption'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>

      <Box sx={{ width: 500, maxWidth: '100%' ,color:"white" }}>
        <TextField
          fullWidth
          label="email"
          id="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}  
          sx={{
            color:"white"
          }}
        />
      </Box>

      <Box sx={{ width: 500, maxWidth: '100%' ,color:"white"}}>
        <TextField   sx={{
            color:"white"
          }}
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />
      </Box>

      <Button
        variant="contained"
        sx={{ width: 500, maxWidth: '100%'  ,color:"white"}}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Typography>don't have an account <IconButton onClick={()=>navigate('/signup')}>Signup</IconButton></Typography>
    </Container>
    </Box>
  )
}

export default Login
