import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, {  useState, useEffect, useContext } from 'react';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';
import { getMunicipios } from '../services/BolsaFamiliaService';
import { Distrito } from '../settings/Municipio';
import { useDebounce } from 'use-debounce';
import { useParams } from 'react-router-dom';

const CampoMunicipio = () => {
  const [listaMunicipios, setListaMunicipios] = useState<Distrito[]>([])
  const [value, setValue] = useState<Distrito>()
  const [inputValue, setInputValue] = useState('');
  const { setMunicipioSelecionado } = useContext<any>(BolsaFamiliaContext);
  const [debouncedValue] = useDebounce(inputValue, 500);
  let { ano, mes, codigosIbge }: any = useParams();

  const setMunicipioRota = (municipioSelecionado: Distrito) => {
    console.log(ano, mes, codigosIbge);
    if(municipioSelecionado){
      let rotaAtual = window.location.pathname;
      window.history.pushState(null, '', `${rotaAtual}/${municipioSelecionado.municipio.id}`);
    }
    
  }

  useEffect(() => {
    getMunicipios()
      .then((municipios) => municipios.filter((v, i, a)=> a.findIndex(t=>(t.municipio.nome === v.municipio.nome))===i))
      .then((municipiosSemDuplicatas) => setListaMunicipios(municipiosSemDuplicatas))
  }, [])

  return (
    <>
      <Autocomplete
        id="country-select-demo"
        options={listaMunicipios}
        style={{width: 300}}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value: any) => {(setValue(value), setMunicipioSelecionado(value), setMunicipioRota(value))}} 
        getOptionLabel={(option: Distrito) => option.municipio.nome}
        renderOption={(option) => (
          <React.Fragment>
            {option.municipio.nome}
          </React.Fragment>
        )}
        clearOnEscape
        disableCloseOnSelect
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