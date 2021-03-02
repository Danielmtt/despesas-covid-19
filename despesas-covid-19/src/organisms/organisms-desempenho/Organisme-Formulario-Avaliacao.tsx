import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import MoleculeFormularioAvaliacao from '../../molecules/molecules-desempenho/Molecule-Formulario-Avaliacao';
import { DesempenhoContext } from '../../providers/desempenho-context';
import { salvarAvaliacao } from '../../services/Service-desempenho';
import { Colaborador } from '../../settings/Colaborador';
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
  const { colaboradores }: any = useContext(DesempenhoContext);

  const onSubmit = (avaliacao: SalvarAvaliacaoRequest) => {
    const listaColaboradores: Colaborador[] = colaboradores;
    const colaboradorId: any = listaColaboradores.find(x => x.nome === avaliacao.colaborador.toString());
    avaliacao.colaborador = colaboradorId.id;
    avaliacao.nota = Number(avaliacao.nota);
    salvarAvaliacao(avaliacao)
      .then(
        (response: any) => {
          if(response.codigoErro !== (400 || 401 || 402 || 403))
          {
            toast.success('Sucesso!', {
              position: 'top-right',
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
          else {
            toast.error(response.mensagem, {
              position: 'top-right',
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
        }
      );
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormularioAvaliacao register={register} style={FlexContainer}/>
      <ToastContainer />
    </form>
  )

}

export default OrganismeFormularioAvaliacao; 