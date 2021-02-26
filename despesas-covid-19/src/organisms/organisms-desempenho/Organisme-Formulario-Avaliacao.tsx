import * as React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MoleculeFormularioAvaliacao from '../../molecules/molecules-desempenho/Molecule-Formulario-Avaliacao';
import { salvarAvaliacao } from '../../services/Service-desempenho';
import { SalvarAvaliacaoRequest } from '../../settings/SalvarAvaliacaoRequest';

const FlexContainer = styled.div`
    justify-content: flex-start;
    margin: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    padding: 0 20px;
  `;

export const OrganismeFormularioAvaliacao = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (avaliacao: SalvarAvaliacaoRequest) => salvarAvaliacao(avaliacao);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormularioAvaliacao register={register} style={FlexContainer}/>
    </form>
  )

}

export default OrganismeFormularioAvaliacao; 