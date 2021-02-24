import * as React from 'react';
import Button from '@material-ui/core/Button';

export const AtomBotao = (props: {textoBotao: string}) => {
  return (
    <Button variant="contained" type="submit" color="primary">
      {props.textoBotao}
    </Button>
  );
};

export default AtomBotao;
