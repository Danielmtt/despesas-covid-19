import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { DesempenhoContext } from '../../providers/desempenho-context';
import { listarColaboradores } from '../../services/Service-desempenho';
import { useDebounce } from 'use-debounce';

export const AtomAutocompleteColaborador = () => {

  const {colaboradores, setColaboradores} = useContext<any>(DesempenhoContext);
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    listarColaboradores().then((listaColaboradores) =>{
      setColaboradores(listaColaboradores);
    })
  }, [])
  return (
    <>
      <Autocomplete
        id="lista-colaboradores"
        options={[colaboradores || null]}
        style={{width: 300}}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        clearOnEscape
        open={inputValue?.length >= 3 && debouncedValue === inputValue}
        disableCloseOnSelect
        popupIcon={false}
        renderGroup={(option) => (
          <React.Fragment>
            {option}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquise um colaborador"
            variant="standard"
          />
        )}
      />
    </>
  )
}

export default AtomAutocompleteColaborador;