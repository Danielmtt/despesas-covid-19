import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { MoleculeFormulario } from '../../molecules/molecules-desempenho/Molecule-Formulario';
import { salvarColaborador } from '../../services/Service-desempenho';

const FlexContainer = styled.div`
  justify-content: space-evenly;
  margin: 10px 20px;
  display: flex;
  width: 700px;
`;

export const AtomFormularioColaborador = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: {
    nomeColaborador: string;
    siglaColaborador: string;
  }) => salvarColaborador(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormulario register={register} style={FlexContainer} />
    </form>
  );
};

export default AtomFormularioColaborador;
