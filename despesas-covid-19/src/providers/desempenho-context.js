import React, { useState } from 'react';
export const DesempenhoContext = React.createContext([{}]);

export const DesempenhoProvider = (props) => {
  const [colaboradores, setColaboradores] = useState([]);

  return (
    <DesempenhoContext.Provider
      value={{
        colaboradores,
        setColaboradores,
      }}
    >
      {props.children}
    </DesempenhoContext.Provider>
  );
};
