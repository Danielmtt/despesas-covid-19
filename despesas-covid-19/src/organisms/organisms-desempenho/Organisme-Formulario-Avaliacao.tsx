import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MoleculeFormularioAvaliacao from '../../molecules/molecules-desempenho/Molecule-Formulario-Avaliacao';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';
import { salvarAvaliacao } from '../../services/Service-desempenho';
import { notifyError, notifySuccess } from '../../services/ServiceApi';
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
  const { listaColaboradores }: any = useContext(DesempenhoAvaliacoesContext);

  const onSubmit = (avaliacao: SalvarAvaliacaoRequest) => {
    const listaColaboradoresApi: Colaborador[] = listaColaboradores;
    const colaboradorId: any = listaColaboradoresApi.find(x => x.nome === avaliacao.colaborador.toString());
    avaliacao.colaborador = colaboradorId.id;
    avaliacao.nota = Number(avaliacao.nota);
    salvarAvaliacao(avaliacao)
      .then((response: any) => {
        if (response.status == (400 || 401 || 402 || 403)) {
          return response.json()
        }
        else {
          notifySuccess('Avaliação salva com sucesso!');
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
      <MoleculeFormularioAvaliacao register={register} style={FlexContainer} />
    </form>
  )

}

export default OrganismeFormularioAvaliacao; 