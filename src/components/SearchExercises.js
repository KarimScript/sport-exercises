import React,{useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { fetchData } from '../utils/fetchData';
import { exerciesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises,bodyPart,setBodyPart,isBodyPart}) => {
 const [search , setSearch] = useState('');
 const [bodyParts, setBodyParts] = useState([]);

useEffect (() =>{
  const fetchExercisesData = async () =>{
    const bodyPartsData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
      ,exerciesOptions);

      setBodyParts(['all', ...bodyPartsData]);
  }
  fetchExercisesData();
},[])

 const handleSearch = async() => {
   if(search){
      const exercisesData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
       exerciesOptions);
     const searchedExercise = exercisesData.filter(
      (exercise) =>{exercise.name.toLowerCase().includes(search)
       ||exercise.target.toLowerCase().includes(search)
       exercise.equipment.toLowerCase().includes(search)
       exercise.bodyPart.toLowerCase().includes(search)
       }
      )
      setSearch('');
      setExercises(searchedExercise);
   }
 }
  return (
    <Stack alignItems='center' mt='70px' justifyContent='center' p='20px' >
      <Typography fontWeight='700' sx={{fontSize:{lg:'45px',xs:'30px'}}} textAlign='center' mb='50px'>
          Exercises You Should Know 
      </Typography>
      <Box mr='30px'>
        <TextField 
          height='76px'
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercies'
          type='text'
          sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},
          width:{lg:'800px',xs:'200px'},
          backgroundColor:'white'
        }}
        />
        <Button variant='search'
          sx={{bgcolor:'#0fa50f',color:'white',textTransform:'none',width:{lg:'170px',xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height:'55px',position:'absolute'}}
          onClick={handleSearch}
         >
          Search
        </Button>
      </Box>
      <Box sx={{position:'realtive' , width:'100%',p:'20px'}}>
         <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
      </Box>
    </Stack>
  )
}

export default SearchExercises