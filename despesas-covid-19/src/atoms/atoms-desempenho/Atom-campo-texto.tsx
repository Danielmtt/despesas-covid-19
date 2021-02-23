import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import * as React from 'react';

export const AtomCampoTexoMascara = (props: {
  register: any;
  name: string;
  label: string;
  mask: string;
}) => {
  return (
    <InputMask mask={props.mask} minLength={4} disabled={false}>
      {() => (
        <TextField
          name={props.name}
          inputRef={props.register}
          required
          label={props.label}
          variant="outlined"
        />
      )}
    </InputMask>
  );
};

export default AtomCampoTexoMascara;
