import Select from '@material-ui/core/Select';
import React, { useContext, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';

const SeletorData = (props: { opcoes?: any[] }) => {
  const { dataSelecionada, setdataSelecionada } = useContext<any>(BolsaFamiliaContext);

  function verificaUrl() {
    const urlParams = new URLSearchParams(window.location.search).get('anoMes');
    if (urlParams){
      setdataSelecionada(urlParams)
    }
  }

  useEffect(() => {
    verificaUrl()
  }, []);

  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Mês/ano</InputLabel>
      <Select
        onChange={(event) => {
          setdataSelecionada(event.target.value);
        }}
        value={dataSelecionada}
        native
      >
        <option key={''} value={''}></option>
        {props.opcoes}
      </Select>
    </FormControl>
  );
};

export default SeletorData;
