import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, {  useState, useContext, useEffect } from 'react';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { getMunicipios } from '../services/BolsaFamiliaService';
import { Distrito } from '../settings/Municipio';
import { useDebounce } from 'use-debounce';

const CampoMunicipio = () => {
  const [listaMunicipios, setListaMunicipios] = useState<Distrito[]>([])
  const [value, setValue] = useState<Distrito>()
  const [inputValue, setInputValue] = useState('');
  const { setMunicipioSelecionado } = useContext<any>(BolsaFamiliaContext);
  const [debouncedValue] = useDebounce(inputValue, 500);
  const [valorSelecionado, setValorSelecionado] = useState<Distrito>();
  const paramIbge = new URLSearchParams(window.location.search).get('codigoIbge');
  
  useEffect(() => {
    getMunicipios()
      .then((municipios) => municipios.filter((v, i, a)=> a.findIndex(t=>(t.municipio.nome === v.municipio.nome))===i))
      .then((municipiosSemDuplicatas) => {
        setListaMunicipios(municipiosSemDuplicatas),
        setValue(municipiosSemDuplicatas.find(x => x.municipio.id === Number(paramIbge)))
        setValorSelecionado(municipiosSemDuplicatas.find(x => x.municipio.id === Number(paramIbge)))
        setMunicipioSelecionado(municipiosSemDuplicatas.find(x => x.municipio.id === Number(paramIbge)))
      })
  }, [])

  return (
    <>
      <Autocomplete
        id="municipios"
        options={listaMunicipios}
        value={valorSelecionado || null}
        style={{width: 300}}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value: any | null) => {(setValue(value), setMunicipioSelecionado(value)), setValorSelecionado(value)}} 
        getOptionLabel={(option: Distrito) => option.municipio.nome}
        renderOption={(option) => (
          <React.Fragment>
            {option?.municipio?.nome}
          </React.Fragment>
        )}
        clearOnEscape
        disableCloseOnSelect
        getOptionSelected={(option, value) => option.municipio.id === value.municipio.id}
        popupIcon={false}
        open={inputValue.length >= 3 && value?.municipio.nome !== inputValue && debouncedValue === inputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Digite um município"
            variant="standard"
          />
        )}
      />

    </>
  )
}

export default CampoMunicipio;