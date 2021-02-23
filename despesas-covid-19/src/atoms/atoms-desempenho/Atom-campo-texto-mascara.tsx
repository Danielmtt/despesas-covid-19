import { TextField } from '@material-ui/core';
import * as React from 'react';

export const AtomCampoTexo = (props: {
  register: any;
  name: string;
  label: string;
}) => {
  return (
    <TextField
      required
      inputRef={props.register}
      name={props.name}
      label={props.label}
      variant="outlined"
    />
  );
};
export default AtomCampoTexo;
