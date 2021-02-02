import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const meses = ['01','02','03','04','05','06','07','08','09','10','11','12']

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const gerarLinhaMesAno = (valorAno) => meses.map(valor => (
    <TreeItem nodeId={`${valorAno}${valor}`} key={`${valorAno}${valor}`} label={`${valorAno}/${valor}` } />
));

export default function LinhaAno(props) {
  const quantidadeAnos = props.LinhaAno ;
  const dataAtual = new Date().getFullYear();
  const classes = useStyles();

      if(quantidadeAnos){
        const elementAnos =  quantidadeAnos.map((valor) => (
          <TreeItem key={valor} nodeId={dataAtual - valor } label={dataAtual - valor }>
          <>{gerarLinhaMesAno(dataAtual - valor)}</>
          </TreeItem>
            ))

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <>{elementAnos}</>
    </TreeView>
  );
}else{
  return <></>
}
}

