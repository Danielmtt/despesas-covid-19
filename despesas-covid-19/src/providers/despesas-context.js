import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const DespesasContext = React.createContext([{}]);

export const DespesasProvider = (props) => {
  let { ano } = useParams();
  const [despesas, setDespesas] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState(ano ? [ano] : []);
  const [controlador, setControlador] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <DespesasContext.Provider
      value={{
        anoSelecionado,
        setAnoSelecionado,
        controlador,
        setControlador,
        despesas,
        setDespesas,
        paginaAtual,
        setPaginaAtual,
      }}
    >
      {props.children}
    </DespesasContext.Provider>
  );
};
