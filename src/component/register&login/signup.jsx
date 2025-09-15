import { Container,Typography,Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as z from "zod";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



const schema = z.object({
  fname: z.string(),
  lname: z.string(),
  address: z.string(),
  email: z.string().email("invalid email!"),
  password: z.string().min(6, "password is weak"),
    confirmPassword: z.string().min(6, "password is weak"),

});

const Signup = () => {
  let navigate=useNavigate();

const [formData, setFormData] = useState({ fname:"",lname:"",address:"",email: "", password: "" ,confirmPassword:""})
  const [formErrors, setFormErrors] = useState({ fname:"",lname:"",address:"",email: "", password: ""  ,confirmPassword:""})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      setFormErrors({ fname:"",lname:"",address:"",email: "", password: "" ,confirmPassword:"" });
      toast.success("Sign Up Success!", {
        position: "top-center",
        autoClose: 2000,
       
      });
      setTimeout(() => {
        navigate('/login')
      }, 3000);
    }catch (err) {
  if (err) {
    const formattedErrors = { fname:"",lname:"",address:"",email: "", password: "" ,confirmPassword:"" }
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
      sx={
        {
          background:"#283445",
          padding:"3rem",
          height:"80vh",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         gap:"1rem",
         borderRadius:"1rem",
         boxShadow:"0 0 4px gray",
             mt:"3rem"  ,
             color:"white"
            

       

        }
      }
    >
      <Box>
              <Typography 
            variant='h4'>
      
            Welcom to Ovela</Typography>
              <Typography 
            variant='caption'>
      
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
           sx={{ width: 300, maxWidth: '55%' }}
          id="fname"
           name="fname"
          label="First name"
          multiline
          maxRows={4}
           value={formData.fname}
          onChange={handleChange}
          error={!!formErrors.fname}
          helperText={formErrors.fname}
        />
        <TextField
        sx={{ width: 300, maxWidth: '55%' }}
          id="lname"
           name="lname"
          label="last name"
          multiline
          onChange={handleChange}
          value={formData.lname}
          error={!!formErrors.lname}
          helperText={formErrors.lname}
        />
        
        </div>
        
        </Box>
         <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField 
      fullWidth 
      label="email"
       id="email" 
       name="email" 
        onChange={handleChange}
        value={formData.email}
          error={!!formErrors.email}
          helperText={formErrors.email}

       />
    </Box>
    
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField 
      fullWidth 
      label="address"
       id="address" 
       name="address"
       onChange={handleChange}
       value={formData.address}
          error={!!formErrors.address}
          helperText={formErrors.address}
       />
    </Box>
     {/* <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField
       fullWidth
        label="email"
         id="email" 
        onChange={handleChange}
         />
    </Box> */}
     <Box sx={{ width: 500, maxWidth: '100%' }}>
              <TextField fullWidth
          id="pass"
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="current-password"
          value={formData.password}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />

    </Box>
         <Box sx={{ width: 500, maxWidth: '100%' }}>
              <TextField fullWidth
          id="pass2"
          label="confirm Password"
          type="password"
          name="confirmPassword"
          autoComplete="current-password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
        />

    </Box>

    <Button variant="contained" sx={{ width: 500, maxWidth: '100%'}} onClick={handleSubmit}>Sign UP</Button>




    </Container>
    </Box>
  )
}

export default Signup
