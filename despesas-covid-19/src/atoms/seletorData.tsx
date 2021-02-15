import Select from '@material-ui/core/Select';
import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const SeletorData = (props: { opcoes?: any[] }) => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          {props.opcoes}
        </Select>
      </FormControl>
    </>
  );
};

export default SeletorData;
