import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  botao: {
    height: 57,
    margin: 5
  }
}));

export const AtomBotao = (props: {textoBotao: string}) => {
  const classes = useStyles();
  return (
    <Button className={classes.botao} variant="contained" type="submit" color="primary">
      {props.textoBotao}
    </Button>
  );
};

export default AtomBotao;
