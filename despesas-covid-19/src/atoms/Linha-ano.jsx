import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

export default function LinhaAno(props) {
  const quantidadeAnos = props.linhaAno;
  const dataAtual = new Date().getFullYear();

  if (quantidadeAnos) {
    const elementAnos = quantidadeAnos.map((valor) => (
      <TreeItem
        key={valor}
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
