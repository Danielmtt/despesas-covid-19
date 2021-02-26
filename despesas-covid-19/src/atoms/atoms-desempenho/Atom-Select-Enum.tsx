import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

export const AtomSelectEnum = (props: {register: any; name: string; valoresEnum: string[]; placeholder: string}) =>{

  const [value, setValue] = useState('');

  function handle(event: any) {
    setValue(event.target.value);
  }

  return(
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-required-label">{props.placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        label={props.placeholder}
        id="demo-simple-select-required"
        name={props.name}
        required
        value={value}
        onChange={(event) => handle(event)}
        style={{
          width: 150
        }}
      >
        {props.valoresEnum.length && props.valoresEnum.map((item: string, index: number) => {
          return <MenuItem value={index} key={index}>{item}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default AtomSelectEnum;