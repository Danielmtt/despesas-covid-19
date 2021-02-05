import React, { useState } from 'react';

export const DespesasContext = React.createContext([{}]);

export const DespesasProvider = (props) => {
  const [despesas, setDespesas] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <DespesasContext.Provider
      value={{ despesas, setDespesas, paginaAtual, setPaginaAtual }}
    >
      {props.children}
    </DespesasContext.Provider>
  );
};
