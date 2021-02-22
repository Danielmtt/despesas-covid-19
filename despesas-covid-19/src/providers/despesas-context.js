import React, { useState } from 'react';

export const DespesasContext = React.createContext([{}]);

export const DespesasProvider = (props) => {
  const [despesas, setDespesas] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState('');
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
