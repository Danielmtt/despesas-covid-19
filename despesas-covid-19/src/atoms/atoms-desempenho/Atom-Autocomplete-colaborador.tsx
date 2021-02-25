import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { DesempenhoContext } from '../../providers/desempenho-context';
import { listarColaboradores } from '../../services/Service-desempenho';
import { useDebounce } from 'use-debounce';
import { Colaborador } from '../../settings/Colaborador';
import styled from 'styled-components';
import AtomErroCampo from './Atom-Erro-Campo';

const Campo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AtomAutocompleteColaborador = (props: {register: any; name: string;}) => {

  const {colaboradores, setColaboradores} = useContext<any>(DesempenhoContext);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<any>();
  const [debouncedValue] = useDebounce(inputValue, 500);
  const [erros, setErros] = useState({ colaborador: { preenchido: false } });

  function validarPreenchido() {
    value ? setErros({colaborador: {preenchido: false}}) : setErros({colaborador: {preenchido: true}});
  }

  useEffect(() => {
    listarColaboradores().then((listaColaboradores) =>{
      setColaboradores(listaColaboradores);
    })
  }, [])

  return (
    <Campo>
      <Autocomplete
        id="lista-colaboradores"
        options={colaboradores}
        style={{width: 250}}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value) => {
          setValue(value);
          validarPreenchido();
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
            error={erros.colaborador.preenchido}
            {...params}
            label="Insira um colaborador"
            variant="outlined"
            name={props.name}
            onBlur={() => validarPreenchido()}
            inputRef={props.register({required: true})}
          />
        )}
      />
      <AtomErroCampo validacao={erros.colaborador.preenchido} mensagem={'Campo obrigatório'}></AtomErroCampo>
    </Campo>
      
  )
}

export default AtomAutocompleteColaborador;