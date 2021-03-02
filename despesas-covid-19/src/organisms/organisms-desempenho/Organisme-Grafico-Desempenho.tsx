import * as React from 'react';
import MoleculeMultiSelecaoColaborador from '../../molecules/molecules-desempenho/Molecule-Multi-Selecao-Colaborador';
import styled from 'styled-components';
import MoleculeGrafico from '../../molecules/molecules-desempenho/Molecule-Grafico';

export const BoxGrafico = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

export const OrganismeGraficoDesempenho = () => {
  return(
    <BoxGrafico>
      <MoleculeMultiSelecaoColaborador />
      <MoleculeGrafico />
    </BoxGrafico>
  )
}

export default OrganismeGraficoDesempenho;