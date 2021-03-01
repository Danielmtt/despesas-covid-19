import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles({
  texto: {
    width: '150px',
    marginLeft: '23px'
  },
  circuloMerito: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#0000ff'
  },
  circuloPromocao: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#008000'
  },
  circuloOutros: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#808080'
  }
});

export const AtomLegenda = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <div className={classes.circuloMerito}>
          <div className={classes.texto}><p>Mérito</p></div>
        </div>
      </div>
      <div>
        <div className={classes.circuloPromocao}>
          <div className={classes.texto}><p>Promoção</p></div>
        </div>
      </div>
      <div>
        <div className={classes.circuloOutros}>
          <div className={classes.texto}><p>N/A ou Adequação</p></div>
        </div>
      </div>
    </div>
  );
};

export default AtomLegenda;
