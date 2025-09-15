import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box, Container, Stack, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ProductsDetials = () => {
  let [product, setproduct] = useState({})
    let [loading, setLoading] = useState(true)

  let { id } = useParams()

  useEffect(() => {
    async function getData() {
      setTimeout(async () => {
        try {
          let { data } = await axios.get(
            'http://localhost:5001/products/' + id
          )
          setproduct(data)
        } catch (err) {
          console.error(err)
        }finally {
          setLoading(false)
        }
      }, 5000)
    }

    getData()
  }, [id])

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
    <Box
      sx={{
        flexWrap: 'wrap',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            gap: '3rem',
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' }, 
          }}
        >
          <Box>
            <CardMedia
              component="img"
              image={product.images ? product.images[0] : product.image}
              alt={product.name}
              sx={{
                height: { xs: '30vh', sm: '40vh', md: '50vh' }, 
                width: { xs: '100%', sm: '70%', md: '50vh' }, 
                objectFit: 'cover',
                borderRadius: '.4rem',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: { xs: 'center', md: 'flex-start' }, 
              width: { xs: '100%', md: '50%' }, 
            }}
          >
            <Typography variant="h5">{product.name}</Typography>
            <Typography color="error" variant="h5">
              {product.price}$
            </Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography variant="caption">{product.description}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: { xs: 'column', sm: 'row' }, 
                width: '100%',
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{
                  width: { xs: '100%', sm: '60%' },
                }}
              >
                Add to cart
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  bgcolor: '#d32f2f',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                <FavoriteIcon />
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default ProductsDetials