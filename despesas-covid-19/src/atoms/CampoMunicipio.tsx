import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, {  useState, useContext, useEffect } from 'react';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { getMunicipios } from '../services/BolsaFamiliaService';
import { Municipio } from '../settings/Municipio';
import { useDebounce } from 'use-debounce';

const CampoMunicipio = () => {
  const [listaMunicipios, setListaMunicipios] = useState<Municipio[]>([])
  const [inputValue, setInputValue] = useState('');
  const { setMunicipioSelecionado } = useContext<any>(BolsaFamiliaContext);
  const [debouncedValue] = useDebounce(inputValue, 500);
  const [valorSelecionado, setValorSelecionado] = useState<Municipio[]>([]);
  const paramIbge = new URLSearchParams(window.location.search).get('codigoIbge');
  const [erros, setErros] = useState({municipio: {valido: true}});

  function validarMunicipio(){
    if(valorSelecionado?.length === 0){
      setErros({municipio: {valido: false}});
    } else{
      setErros({municipio: {valido: true}});
    }
  }

  function tranformarParamsEmArray(municipiosSemDuplicatas: Municipio[]): Municipio[]|any{
    if(paramIbge){
      const ibgeFiltrado = paramIbge.split(',').map((item) => {
        const findX =  municipiosSemDuplicatas.find(x => x.id === Number(item))
        if(findX){
          const teste = findX;
          return teste
        }
      });
      return ibgeFiltrado
    } 
  }

  useEffect(() => {
    getMunicipios()
      .then((municipiosSemDuplicatas) => {
        setListaMunicipios(municipiosSemDuplicatas);
        if(paramIbge){
          setValorSelecionado(tranformarParamsEmArray(municipiosSemDuplicatas));
        }
        setMunicipioSelecionado(municipiosSemDuplicatas.find(x => x.id === Number(paramIbge)));
      })
  }, [])

  return (
    <>
      <Autocomplete
        multiple
        id="municipios"
        limitTags={2}
        options={listaMunicipios}
        value={valorSelecionado || null}
        style={{width: 300}}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value: any | null) => {setMunicipioSelecionado(value), setValorSelecionado(value)}} 
        getOptionLabel={(option: Municipio) => option.nome}
        renderOption={(option) => (
          <React.Fragment>
            {option.nome}
          </React.Fragment>
        )}
        clearOnEscape
        disableCloseOnSelect
        getOptionSelected={(option, value) => option.id === value.id}
        popupIcon={false}
        open={inputValue?.length >= 3 && debouncedValue === inputValue}
        renderInput={(params) => (
          <TextField
            error={!erros.municipio.valido}
            {...params}
            label="Digite um município"
            variant="standard"
            onBlur={() => {
              validarMunicipio()
            }}
          />
        )}
      />

    </>
  )
}

export default CampoMunicipio;