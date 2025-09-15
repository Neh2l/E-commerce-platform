 import { Box, Container, Stack, Typography } from '@mui/material'
  import React from 'react'
  import ToggleButton from '@mui/material/ToggleButton';
  import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//   import { useState,useEffect } from 'react';
  import { useNavigate } from 'react-router';
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Button from '@mui/material/Button';
   


export function Product({ product }) {
    let navigate=useNavigate();

  return (
    <Card sx={{ width: 300, height: 400, m: 2, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={product.images ? product.images[0] : product.image} 
        alt={product.title}
        sx={{
          height: 180,
          objectFit: "cover", 
          backgroundColor: "#f9f9f9",
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="subtitle1" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2, 
          }}
        >
          {product.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
         
        <Button variant="contained" color="error" onClick={() => navigate(`/products/${product.id}`)}>show more</Button>
      </CardActions>
    </Card>
  );
}