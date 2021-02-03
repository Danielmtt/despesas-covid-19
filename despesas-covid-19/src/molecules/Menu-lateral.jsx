import React from 'react';
import LinhaAno from '../atoms/Linha-ano.jsx';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const MenuLateral = (props) => {
  const classes = useStyles();
  if (props.linhaAno) {
    return (
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <>
          {LinhaAno({
            linhaAno: props.linhaAno,
            gerarLinhaMesAno: props.gerarLinhaMesAno,
          })}
        </>
      </TreeView>
    );
  } else {
    return <></>;
  }
};
export default MenuLateral;
