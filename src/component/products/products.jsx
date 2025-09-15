 import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
  import React from 'react'
  import { useState,useEffect } from 'react';
  import { useNavigate } from 'react-router';
  import Button from '@mui/material/Button';
  import axios from 'axios';
  import { Product } from '../../common/product';
  import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
  
   


export  function  Products() {
     const [products, setProducts] = useState([]);
         let [loading, setLoading] = useState(true)
     let navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/products")
      .then((res) => {
        let data=res.data;
                // data = data.slice(1,7);
                setProducts(data);
    
     })
      .catch((err) => {
        console.error("Error fetching products:", err);
      }).finally(()=>{
        setLoading(false)
      })
  }, []);
  
   if (loading) {
      return (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
         <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </Container>
      )
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
    <Container sx={

        {
            display:"flex",
            flexWrap:"wrap"
        }
    }>
      

       {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
                <Button variant="contained" color="error" onClick={() => navigate(`/handle`)}>Mange products</Button>
        
    </Container>
    </Box>
  )
}