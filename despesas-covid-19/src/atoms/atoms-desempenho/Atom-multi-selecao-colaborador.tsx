import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { Colaborador } from '../../settings/Colaborador';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';

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

export default function AtomMultiSelecaoColaborador(props: {lista: Colaborador[]}) {
  const classes = useStyles();
  const {setColaboradoresSelecionados} = useContext<any>(DesempenhoAvaliacoesContext);
  const [personName, setPersonName] = React.useState<Colaborador[]>([]);
  const listaColaboradores = props.lista;
  let listaSelecionados: string[] = [];

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    console.log(event.target.value);
    setPersonName(event.target.value);
    setColaboradoresSelecionados(event.target.value);
  };

  function removerNomesDuplicados(lista: string[]): string[]{
    let novaLista = lista.filter(function(item, i){
      return lista.indexOf(item) === i;
    })

    return novaLista;
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Colaboradores</InputLabel>
        <Select 
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          style={{
            width: 250
          }}
          renderValue={() => (
            personName.forEach((colaborador: any) => {
              listaSelecionados.push(colaborador.nome)
            }),
            (removerNomesDuplicados(listaSelecionados).join(', ')))
          }
          MenuProps={MenuProps}
        >
          {listaColaboradores.map((name) => (
            <MenuItem
              key={name.id}
              // @ts-ignore
              value={name}
            >
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name.nome} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
