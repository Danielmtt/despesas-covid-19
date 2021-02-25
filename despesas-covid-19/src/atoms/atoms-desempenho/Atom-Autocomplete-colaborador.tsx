import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { DesempenhoContext } from '../../providers/desempenho-context';
import { listarColaboradores } from '../../services/Service-desempenho';
import { useDebounce } from 'use-debounce';
import { Colaborador } from '../../settings/Colaborador';

export const AtomAutocompleteColaborador = (props: {register: any; name: string;}) => {

  const {colaboradores, setColaboradores} = useContext<any>(DesempenhoContext);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<any>();
  const [debouncedValue] = useDebounce(inputValue, 500);
  //const [textFieldValue, setTextFieldValue] = useState<any>();

  useEffect(() => {
    listarColaboradores().then((listaColaboradores) =>{
      setColaboradores(listaColaboradores);
    })
  }, [])
  return (
  
    <Autocomplete
      id="lista-colaboradores"
      options={colaboradores}
      style={{width: 250}}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, value) => {
        setValue(value);
      }}
      clearOnEscape
      open={inputValue?.length >= 3 && debouncedValue === inputValue && value?.nome !== inputValue}
      popupIcon={false}
      getOptionLabel={(option: Colaborador) => option.nome}
      getOptionSelected={(option, value) => option.id === value.id}
      renderOption={(option: Colaborador) => (
        <React.Fragment>{option.nome}</React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Insira um colaborador"
          variant="outlined"
          name={props.name}
          // required
          inputRef={props.register({required: true})}
        />
      )}
    />
  )
}

export default AtomAutocompleteColaborador;