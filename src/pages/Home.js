import React,{useState} from 'react';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import Hero from '../components/Hero';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [ exercises , setExercises] = useState([]);

  return (
    <Box>
      <Hero />
      <SearchExercises setExercises={setExercises} 
       bodyPart = {bodyPart} setBodyPart={setBodyPart}
       />
      <Exercises
      setExercises={setExercises} 
      bodyPart = {bodyPart} exercises={exercises}
      />
    </Box>
  )
}

export default Home