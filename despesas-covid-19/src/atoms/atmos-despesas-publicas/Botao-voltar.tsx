import React from 'react';
import Button from '@material-ui/core/Button';
import { DespesasContext } from '../../providers/despesas-context.js';
import { Link } from 'react-router-dom';

export const BotaoVoltar = () => {
  const {
    despesas,
    paginaAtual,
    setControlador,
    setPaginaAtual,
  }: any = React.useContext(DespesasContext);

  if (despesas) {
    return (
      <Link
        key={`${paginaAtual + 1}`}
        style={{ textDecoration: 'none' }}
        to={`?page=${paginaAtual - 1}`}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setControlador(0);
            setPaginaAtual(paginaAtual - 1);
          }}
        >
          voltar
        </Button>
      </Link>
    );
  } else {
    return <></>;
  }
};
export default BotaoVoltar;
