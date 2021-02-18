import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import meses from '../settings/consts/arrayMeses';
import { DespesasContext } from '../providers/despesas-context';

const useStyles = makeStyles({
  root: {
    '& .MuiTreeItem-label': {
      fontSize: 18,
    },
    paddingTop: 5,
    fontSize: 14,
  },
});

export default function gerarLinhaMesAno(valorAno: number) {
  const { setControlador }: any = React.useContext(DespesasContext);
  const classes = useStyles();

  if (valorAno < new Date().getFullYear()) {
    return meses.map((valor) => (
      <Link
        key={`${valorAno}${valor.valor}`}
        style={{ textDecoration: 'none' }}
        to={`/covid-19/${valorAno}/${valor.valor}`}
      >
        <TreeItem
          className={classes.root}
          nodeId={`${valorAno}${valor.valor}`}
          key={`${valorAno}${valor.valor}`}
          label={`${valor.nome}`}
          onClick={() => {
            setControlador(0);
          }}
        />
      </Link>
    ));
  } else {
    return meses
      .filter((valor) => parseInt(valor.valor, 10) <= new Date().getMonth())
      .map((valor) => (
        <Link
          key={`${valorAno}${valor.valor}`}
          style={{ textDecoration: 'none' }}
          to={`/covid-19/${valorAno}/${valor.valor}`}
        >
          <TreeItem
            className={classes.root}
            nodeId={`${valorAno}${valor.valor}`}
            key={`${valorAno}${valor.valor}`}
            label={`${valor.nome}`}
            onClick={() => {
              setControlador(0);
            }}
          />
        </Link>
      ));
  }
}
