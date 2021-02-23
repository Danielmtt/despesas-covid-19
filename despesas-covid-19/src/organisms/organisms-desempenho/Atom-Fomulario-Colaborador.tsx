import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { MoleculeFormulario } from '../../molecules/molecules-desempenho/Molecule-Formulario';

const FlexContainer = styled.div`
  justify-content: space-evenly;
  margin: 10px 20px;
  display: flex;
  width: 700px;
`;

export const AtomFormularioColaborador = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormulario register={register} style={FlexContainer} />
    </form>
  );
};

export default AtomFormularioColaborador;
