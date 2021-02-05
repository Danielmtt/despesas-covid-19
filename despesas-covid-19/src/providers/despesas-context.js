import React, { useState } from 'react';

export const DespesasContext = React.createContext([{}]);

export const DespesasProvider = (props) => {
  const [despesas, setDespesas] = useState([]);
  return (
    <DespesasContext.Provider value={{ despesas, setDespesas }}>
      {props.children}
    </DespesasContext.Provider>
  );
};
