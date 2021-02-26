import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import MoleculeFormularioAvaliacao from '../../molecules/molecules-desempenho/Molecule-Formulario-Avaliacao';
import { DesempenhoContext } from '../../providers/desempenho-context';
import { salvarAvaliacao } from '../../services/Service-desempenho';
import { Colaborador } from '../../settings/Colaborador';
import { ErroRequisicaoInterface } from '../../settings/ErroRequisicaoInterface';
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
    // console.log(e.target)
    // reset({
    //   colaborador: {},
    //   tipoAvaliacao: '',
    //   resultado: '',
    //   status: '',
    //   data: '',
    //   nota: null,
    // });
    const listaColaboradores: Colaborador[] = colaboradores;
    const colaboradorId: any = listaColaboradores.find(x => x.nome === avaliacao.colaborador.toString());
    avaliacao.colaborador = colaboradorId.id;
    avaliacao.nota = Number(avaliacao.nota);
    salvarAvaliacao(avaliacao)
      .then(
        (response: any) => {
          if(response.status === (200 || 201))
          {
            toast.success('Sucesso!', {
              position: 'top-right',
              autoClose: 10000,
              closeOnClick: true,
              pauseOnHover: true,
            });
          } else if(response.status === 400){
            response.json((responseJson: ErroRequisicaoInterface) => {
              toast.error(responseJson.mensagem, {
                position: 'top-right',
                autoClose: 10000,
                closeOnClick: true,
                pauseOnHover: true,
              });
            })
          }
        }
      );
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <MoleculeFormularioAvaliacao register={register} style={FlexContainer}/>
    </form>
  )

}

export default OrganismeFormularioAvaliacao; 