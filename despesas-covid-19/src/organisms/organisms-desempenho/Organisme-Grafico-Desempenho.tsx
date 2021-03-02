import * as React from 'react';
import MoleculeMultiSelecaoColaborador from '../../molecules/molecules-desempenho/Molecule-Multi-Selecao-Colaborador';
import styled from 'styled-components';

export const BoxGrafico = styled.div`
  display: flex;
  width: 900px;
`;

export const OrganismeGraficoDesempenho = () => {
  return(
    <BoxGrafico>
      <MoleculeMultiSelecaoColaborador />
    </BoxGrafico>
  )
}

export default OrganismeGraficoDesempenho;