import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState,useEffect } from 'react';
// import { useNavigate,useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from "axios";
import { Product } from '../../common/product';

export  function ColorToggleButton() {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event,newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      
    >
      <ToggleButton value="web">All</ToggleButton>
      <ToggleButton value="android">Women</ToggleButton>
      <ToggleButton value="ios">Men</ToggleButton>
    </ToggleButtonGroup>
  );
}


export  function  SelectedProducts() {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        let data=res.data;
                data = data.filter(p => p.category.name === "Electronics");
                setProducts(data);
    
     })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  return (
    <Container sx={

        {
            display:"flex",
            flexWrap:"wrap"
        }
    }>

       {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </Container>
  )
}



const Main = () => {
  return (
    <Container>
       <Stack direction={"row"} 
       sx={

        {
            alignItems:"center",
            flexWrap:"wrap",
            mt:"1rem"
        }
       }>
        <Box flexGrow={1} sx={
            {
                width:"50%",
            }
        }>
     <Typography
      variant='h5'
     >
             FlashSales
     </Typography>
     <Typography 
     
     >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
     </Typography>

     

        </Box>
        <Box>
            <ColorToggleButton/>
        </Box>

       </Stack>


      
       
            <Stack sx={{
           
            }}>
                   <SelectedProducts />
                   <Button onClick={()=>{nav}} variant="contained" color="error" sx={
                         {
                              width:"20%",

                       
                          }

                   }>show more</Button>


            </Stack>



    


    </Container>
  )
}

export default Main
