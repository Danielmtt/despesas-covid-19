import React, { useState } from 'react';
export const DesempenhoAvaliacoesContext = React.createContext([]);

export const DesempenhoAvaliacoesProvider = (props) => {
  const [listaColaboradores, setListaColaboradores] = useState([]);

  return (
    <DesempenhoAvaliacoesContext.Provider
      value={{
        listaColaboradores,
        setListaColaboradores,
      }}
    >
      {props.children}
    </DesempenhoAvaliacoesContext.Provider>
  );
};
