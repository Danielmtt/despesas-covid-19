import Select from '@material-ui/core/Select';
import React, { useContext, useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';

const SeletorData = (props: { opcoes?: any[] }) => {
  const { dataSelecionada, setdataSelecionada } = useContext<any>(BolsaFamiliaContext);
  const [erros ,setErros] = useState({ data: { valido: true}})

  function validarData(data: any){
    if(data == ''){
      setErros({data: {valido: false}});
    } else{
      setErros({data: {valido: true}});
    }
  }
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
        onBlur={(event) => {
          validarData(event.target.value);
        }}
        error={!erros.data.valido}
        onChange={(event) => {
          setdataSelecionada(event.target.value);
          validarData(event.target.value)
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
