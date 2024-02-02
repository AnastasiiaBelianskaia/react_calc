import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

const buttons = [
  {id: 'zero', value: '0'},
  {id: 'one', value: '1'},
  {id: 'two', value: '2'},
  {id: 'three', value: '3'},
  {id: 'four', value: '4'},
  {id: 'five', value: '5'},
  {id: 'six', value: '6'},
  {id: 'seven', value: '7'},
  {id: 'eight', value: '8'},
  {id: 'nine', value: '9'},
  {id: 'add', value: '+'},
  {id: 'subtract', value: '-'},
  {id: 'equals', value: '='},
  {id: 'divide', value: '/'},
  {id: 'clear', value: 'C'},
  {id: 'multiply', value: '*'},
  {id: 'decimal', value: '.'}
]

function Calculator() {
  let [state, setState] = useState(0);
  const handleClick = (e) => {
    console.log(e.target.innerText);
    const value = e.target.innerText;
    try{
      if (value === "=") {
        console.log('state from parse: ', state)
        setState((eval(state)));
      } else if (value === "C") {
        setState(0);
      } else {
          if ( state === 0 ){
            setState(state = value)
          } else {
            setState(state + value)
          }
      }
    } catch (error) {
      setState(state="syntax error")
      console.log(error)
    }
  }

  console.log("state: ", state);
  return (
    <Box id='wrapper'>
      <Box id='display'>{state}</Box>
      <Box id='buttons'>
        {buttons.map(({id, value}) => (
          <Button key={id} id={id} onClick={handleClick}>{value}</Button>
        ))}
      </Box>
    </Box>
  );
}

export default Calculator;
