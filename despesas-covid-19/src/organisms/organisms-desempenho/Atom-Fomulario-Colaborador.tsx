import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { MoleculeFormulario } from '../../molecules/molecules-desempenho/Molecule-Formulario';
import { getColaboradores, salvarColaborador } from '../../services/Service-desempenho';
import MoleculeTabelaColaborador from '../../molecules/molecules-desempenho/MoleculeTabelaColaborador';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';
import { ToastContainer } from 'react-toastify';
import { notifyError } from '../../services/ServiceApi';
import { notifySuccess } from '../../services/ServiceApi';

const FlexContainer = styled.div`
  justify-content: space-evenly;
  margin: 10px 20px;
  display: flex;
  width: 700px;
`;

export const AtomFormularioColaborador = () => {
  const { register, handleSubmit } = useForm();
  const { setListaColaboradores } = React.useContext<any>(DesempenhoAvaliacoesContext);
  const onSubmit = (data: {
    nomeColaborador: string;
    siglaColaborador: string;
  }) => {
    salvarColaborador(data)
      .then((response) => {
        if (response.status == 400) {
          return response.json()
        }
        else {
          getColaboradores().then((listaColaboradores) => {
            setListaColaboradores(listaColaboradores);
            notifySuccess('Colaborador salvo com sucesso!');
          })
        }
      })
      .then((data) => {
        if (data) {
          notifyError(data.mensagem)
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormulario register={register} style={FlexContainer} />
      <MoleculeTabelaColaborador />
      <ToastContainer />
    </form>
  );
};

export default AtomFormularioColaborador;
