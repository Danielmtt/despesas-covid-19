import React, { useState } from 'react';
export const DesempenhoAvaliacoesContext = React.createContext([]);

export const DesempenhoAvaliacoesProvider = (props) => {
  const [listaColaboradores, setListaColaboradores] = useState([]);
  const [colaboradoresSelecionados, setColaboradoresSelecionados] = useState(
    []
  );

  return (
    <DesempenhoAvaliacoesContext.Provider
      value={{
        listaColaboradores,
        setListaColaboradores,
        colaboradoresSelecionados,
        setColaboradoresSelecionados,
      }}
    >
      {props.children}
    </DesempenhoAvaliacoesContext.Provider>
  );
};
