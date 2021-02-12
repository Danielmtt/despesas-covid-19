import React, { useState } from 'react';

export const DespesasContext = React.createContext([{}]);

export const DespesasProvider = (props) => {
  const [despesas, setDespesas] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [mesAnoSelecionado, setMesAnoSelecionado] = useState('');

  return (
    <DespesasContext.Provider
      value={{
        despesas,
        setDespesas,
        paginaAtual,
        setPaginaAtual,
        mesAnoSelecionado,
        setMesAnoSelecionado,
      }}
    >
      {props.children}
    </DespesasContext.Provider>
  );
};
