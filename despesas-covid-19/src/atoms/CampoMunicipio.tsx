import { makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import * as React from 'react';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CampoMunicipio = () => {
  const [inputValue, setInputValue] = React.useState('');
  const classes = useStyles();
  return (
    <>
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries}
        classes={{
          option: classes.option,
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
            <span>{(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </React.Fragment>
        )}
        open={inputValue.length >= 3}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Digite um município"
            variant="outlined"
          />
        )}
      />

    </>
  )
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
}

const countries: CountryType[] = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
]

export default CampoMunicipio;