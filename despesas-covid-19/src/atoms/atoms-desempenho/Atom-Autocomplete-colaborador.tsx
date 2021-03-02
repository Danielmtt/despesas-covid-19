import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { getColaboradores } from '../../services/Service-desempenho';
import { useDebounce } from 'use-debounce';
import { Colaborador } from '../../settings/Colaborador';
import styled from 'styled-components';
import AtomErroCampo from './Atom-Erro-Campo';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

export const AtomAutocompleteColaborador = (props: {register: any; name: string;}) => {

  const {listaColaboradores, setListaColaboradores} = useContext<any>(DesempenhoAvaliacoesContext);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<any>();
  const [debouncedValue] = useDebounce(inputValue, 500);
  const [erros, setErros] = useState({ colaborador: { preenchido: false } });

  function validarPreenchido() {
    value ? setErros({colaborador: {preenchido: false}}) : setErros({colaborador: {preenchido: true}});
  }

  useEffect(() => {
    getColaboradores().then((listaColaboradores) =>{
      setListaColaboradores(listaColaboradores);
    })
  }, [])

  return (
    <Campo>
      <Autocomplete
        id="lista-colaboradores"
        options={listaColaboradores}
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
      <AtomErroCampo validacao={erros.colaborador.preenchido} width={'auto'} mensagem={'Campo obrigatório'}></AtomErroCampo>
    </Campo>
      
  )
}

export default AtomAutocompleteColaborador;