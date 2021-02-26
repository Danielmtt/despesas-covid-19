import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export const AtomSelectEnum = (props: {register: any; name: string; valoresEnum: string[]; placeholder: string;}) =>{

  return(
    <FormControl variant="outlined" style={{margin: '5px'}}>
      <InputLabel id="demo-simple-select-required-label">{props.placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        label={props.placeholder}
        name={props.name}
        required
        defaultValue={''}
        onChange={(event: any) => props.register({name: props.name, value: event.target.value})}
        style={{
          width: 200
        }}
      >
        {props.valoresEnum.length && props.valoresEnum.map((item: string, index: number) => {
          return <MenuItem value={index+1} key={index+1}>{item}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default AtomSelectEnum;