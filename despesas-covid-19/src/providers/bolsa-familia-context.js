import React, { useState } from 'react';
export const BolsaFamiliaContext = React.createContext([{}]);

export const BolsaFamiliaProvider = (props) => {
  const [despesasBolsaFamilia, setDespesasBolsaFamilia] = useState([]);
  const [dataSelecionada, setdataSelecionada] = useState('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState();

  return (
    <BolsaFamiliaContext.Provider
      value={{
        dataSelecionada,
        setdataSelecionada,
        despesasBolsaFamilia,
        setDespesasBolsaFamilia,
        municipioSelecionado,
        setMunicipioSelecionado,
      }}
    >
      {props.children}
    </BolsaFamiliaContext.Provider>
  );
};
