import { TextField } from '@material-ui/core';
import * as React from 'react';

export default function Teste() {
  // function falarConsole(){
  //   console.log('FALEI');
  // }
  function verDados(event: any){
    console.log(event.target.value);
    console.log(typeof event.target.value);
  }
  return(
    <TextField
      type="date"
      onChange={(event) => verDados(event)}
      defaultValue={'2020-12-14'}
    >

    </TextField>
  )
}