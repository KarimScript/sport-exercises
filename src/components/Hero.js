import React from 'react';
import {Stack,Box,Typography} from '@mui/material';
import HomeImage from '../assets/images/home-img.webp';
const Hero = () => {
  return (
    <Box sx={{ mt: { lg: '130px', xs: '60px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="black" fontWeight="600" fontSize="30px" borderBottom='3px solid #0fa50f' width='200px'>Fitness Club</Typography>
    <Typography className="welcome-text" fontWeight={800} sx={{ fontSize: { lg: '60px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And never give up 
    </Typography>
    <Typography fontSize="22px" lineHeight="35px" sx={{width:{lg:'50vw', xs:'90vw'}}}>
      Check out the most effective exercises personalized to you.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0fa50f', paddingBlock: '15px',paddingInline:'10px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#0fa50f" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HomeImage} alt="hero-banner" className="hero-banner-img"  />
  </Box>
  )
}

export default Hero