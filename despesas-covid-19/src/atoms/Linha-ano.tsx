import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core';
import { LinhaAnoInterface } from '../settings/LinhaAnoInterface';
import { DespesasContext } from '../providers/despesas-context';

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
  const { setAnoSelecionado }: any = React.useContext(DespesasContext);
  const quantidadeAnos = props.linhaAno;
  const dataAtual = new Date().getFullYear();
  const classes = useStyles();

  if (quantidadeAnos) {
    const elementAnos = quantidadeAnos.map((valor) => (
      <TreeItem
        className={classes.root}
        key={(dataAtual - valor).toString()}
        nodeId={(dataAtual - valor).toString()}
        label={dataAtual - valor}
        onClick={() => setAnoSelecionado((dataAtual - valor).toString())}
      >
        <>{props.gerarLinhaMesAno(dataAtual - valor)}</>
      </TreeItem>
    ));
    return <>{elementAnos}</>;
  } else {
    return <></>;
  }
}
