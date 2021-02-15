import Select from '@material-ui/core/Select';
import React, { useContext } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';

const SeletorData = (props: { opcoes?: any[] }) => {
  const { setdataSelecionada } = useContext<any>(BolsaFamiliaContext);

  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        onChange={(event) => {
          setdataSelecionada(event.target.value);
        }}
        native
      >
        <option value={''}></option>
        {props.opcoes}
      </Select>
    </FormControl>
  );
};

export default SeletorData;