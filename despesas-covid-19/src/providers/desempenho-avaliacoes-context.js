import React, { useState } from 'react';
import { BolsaFamiliaContext } from './bolsa-familia-context';
export const DesempenhoAvaliacoesContext = React.createContext([{}]);

export const DesempenhoAvaliacoesProvider = (props) => {
  const [listaColaboradores, setListaColaboradores] = useState([]);

  return (
    <BolsaFamiliaContext.Provider
      value={{
        listaColaboradores,
        setListaColaboradores,
      }}
    >
      {props.children}
    </BolsaFamiliaContext.Provider>
  );
};
