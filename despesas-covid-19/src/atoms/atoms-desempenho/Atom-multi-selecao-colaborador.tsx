import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
   
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {
    'id': 1,
    'nome': 'Juliana',
    'sigla': 'JLA',
    'temAvaliacao': false
  },
  {
    'id': 2,
    'nome': 'Pedro',
    'sigla': 'PDO',
    'temAvaliacao': false
  },
  {
    'id': 3,
    'nome': 'Ander',
    'sigla': 'ADR',
    'temAvaliacao': false
  }
];

export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState<any>([]);

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected: any) => (selected).join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name.id} value={name.nome}>
              <Checkbox checked={personName.indexOf(name.nome) > -1} />
              <ListItemText primary={name.nome} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
