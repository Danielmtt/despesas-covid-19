import * as React from 'react';

export default function Teste() {
  function falarConsole(){
    console.log('FALEI');
  }
  return(
    <button onClick={() => falarConsole()}>Clique-me</button>
  )
}