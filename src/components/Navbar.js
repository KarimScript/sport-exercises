import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Fit-Logo.svg';
import { AssessmentTwoTone, LinkOff } from '@mui/icons-material';

const Navbar = () => {
  return (
   <Stack
    direction='row'
    alignItems='center'
    sx={{gap:{sm:'120px', xs:'40px'},mt:{sm:'32px',xs:'20px'}}}
    px='35px'
    style={{'padding-left':'5.5vw'}}
   >
    <Link to='/'>
      <img src={Logo}/>
    </Link>
    <Stack
     direction='row'
     gap='40px'
     font-size='24px'
     fontWeight='bold'
    >
      <Link to='/' >Home</Link>
      <a href='#exercises' >Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar