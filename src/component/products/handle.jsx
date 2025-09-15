import axios from 'axios'
import * as z from "zod"
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Box, Container, TextField, Button, Typography } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const productSchema = z.object({
    name :  z.string("value must be string").min(3,"value must be above 3 character").max(30 , "value must be under 31 character")  ,
    category :  z.string("value must be string").min(3,"value must be above 3 character"),
    price :  z.string("value must be string"),
    description :  z.string("value must be string").min(5,"value must be above 5 character"),
    image :  z.string("value must be string"),
    rating :  z.string("value must be string"),
})

const Handle = () => {
    let [product , setProduct] = useState({id:new Date() ,name : "" , category : "" , price : "" , description:"" , image:"" , rating:""})
    let [errors , setErrors] = useState({})
    let navigate = useNavigate()

    const handleChange = (e) => {
        setProduct({...product,[e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = productSchema.safeParse(product)
        console.log(response);
        if (!response.success) {
            let newErrors = {}
            response.error.issues.forEach(err => newErrors[err.path[0]] = err.message)
            setErrors(newErrors)
            toast.error("failed to add product ")
            return;
        }
        setErrors({})
        try {
            let data = await axios.post("http://localhost:5001/products" , product) 
            console.log(data);
            setProduct({name : "" , category : "" , price : "" , description:"" , image:"" , rating:""})
            toast.success("product add successfully")
            setTimeout(() => {
                navigate("/products")
            },2000)
        } catch {
            toast.error("failed to add product")
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
    
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" color="error" gutterBottom>
        Add product
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        
        <TextField 
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />

        <TextField 
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          error={!!errors.category}
          helperText={errors.category}
          fullWidth
        />

        <TextField 
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          fullWidth
        />

        <TextField 
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          fullWidth
        />

        <TextField 
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          error={!!errors.image}
          helperText={errors.image}
          fullWidth
        />

        <TextField 
          label="Rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          error={!!errors.rating}
          helperText={errors.rating}
          fullWidth
        />

        <Button type="submit" variant="contained" color="error">
          Add Product
        </Button>
      </Box>
    </Container>
    </Box>
  )
}

export default Handle
