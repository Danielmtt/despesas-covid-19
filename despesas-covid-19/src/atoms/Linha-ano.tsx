import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core';
import { LinhaAnoInterface } from '../settings/LinhaAnoInterface';

const useStyles = makeStyles({
  root: {
    '& .MuiTreeItem-label': {
      fontSize: 18,
      color: '#002776',
    },
    '& .MuiTreeItem-iconContainer': {
      color: '#002776',
    },
    paddingTop: 5,
    fontSize: 14,
  },
});

export default function LinhaAno(props: LinhaAnoInterface) {
  const quantidadeAnos = props.linhaAno;
  const dataAtual = new Date().getFullYear();
  const classes = useStyles();

  if (quantidadeAnos) {
    const elementAnos = quantidadeAnos.map((valor) => (
      <TreeItem
        onChange={(change) => {
          console.log(change);
        }}
        className={classes.root}
        key={(dataAtual - valor).toString()}
        nodeId={(dataAtual - valor).toString()}
        label={dataAtual - valor}
      >
        <>{props.gerarLinhaMesAno(dataAtual - valor)}</>
      </TreeItem>
    ));
    return <>{elementAnos}</>;
  } else {
    return <></>;
  }
}
