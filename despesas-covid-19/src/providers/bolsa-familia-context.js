import React, { useState } from 'react';

export const BolsaFamiliaContext = React.createContext([{}]);

export const BolsaFamiliaProvider = (props) => {
  const [despesasBolsaFamilia, setDespesasBolsaFamilia] = useState([]);
  

  return (
    <BolsaFamiliaContext.Provider
      value={{
        despesasBolsaFamilia,
        setDespesasBolsaFamilia,
      }}
    >
      {props.children}
    </BolsaFamiliaContext.Provider>
  );
};
