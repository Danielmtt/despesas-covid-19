import { trackPromise } from 'react-promise-tracker';
import { SalvarAvaliacaoRequest } from '../settings/SalvarAvaliacaoRequest';
import { notifyError } from './ServiceApi';

const baseUrl = 'http://localhost:8080';

// TODO: alterar para END-POINT certo
export const salvarColaborador = async (data: {
  nomeColaborador: string;
  siglaColaborador: string;
}) => {
  return new Promise<any[]>((resolve) => {
    resolve(
      trackPromise(
        new Promise<any[]>(() => [data.nomeColaborador, data.siglaColaborador])
      )
    );
  });
};

export const listarColaboradores = async () => {
  return new Promise<any[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrl}/colaborador`).then((response) => response.json())
      )
    );
  });
};

export const salvarAvaliacao = async (avaliacao: SalvarAvaliacaoRequest) => {
  console.log(avaliacao);
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      colaborador: avaliacao.colaborador,
      tipoAvaliacao: avaliacao.tipoAvaliacao,
      resultado: avaliacao.resultado,
      status: avaliacao.status,
      data: avaliacao.data,
      nota: avaliacao.nota,
    }),
  };
  return new Promise((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrl}/avaliacoes`, options).catch(() => notifyError())
      )
    );
  });
};
