import { trackPromise } from 'react-promise-tracker';
import { AvaliacaoInteface } from '../settings/AvaliacaoInterface';
import { baseUrlDev } from '../settings/consts/baseUrl';
import { notifyError } from './ServiceApi';

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

export const getAllAvaliacoes = async () => {
  return new Promise<AvaliacaoInteface[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrlDev}/avaliacoes`)
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};

export const deleteAvaliacao = async (avaliacaoId: number) => {
  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrlDev}/avaliacoes/${avaliacaoId}`, { method: 'DELETE' } )
          .catch(() => notifyError())
      )
    );
  });
};