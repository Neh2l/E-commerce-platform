import { Box, Container, Typography, Button } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import heroImg from '../../assets/hero.jpg';
import hero2Img from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import Features from './features';

const Hero = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Swiper
        style={{ height: "60vh", width: "100%" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={heroImg}
              alt="Hero"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                color: "#fff",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>Smart watch</Typography>
              <Typography variant="body1" sx={{ maxWidth: "400px", mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Button variant="contained" color="error">Shop Now</Button>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={hero2Img}
              alt="Product"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                color: "#fff",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>Airpods</Typography>
              <Typography variant="body1" sx={{ maxWidth: "400px", mb: 2 }}>
                Get up to 20% off on new arrivals!
              </Typography>
              <Button variant="contained" color="error">Shop Now</Button>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={hero3}
              alt="Headphone"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                color: "#fff",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>Best Headphones</Typography>
              <Typography variant="body1" sx={{ maxWidth: "400px", mb: 2 }}>
                Experience amazing sound quality with our new collection.
              </Typography>
              <Button variant="contained" color="error">Shop Now</Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Features/>
    </Container>
  )
}

export default Hero
