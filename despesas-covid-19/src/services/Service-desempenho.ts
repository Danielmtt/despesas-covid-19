import { trackPromise } from 'react-promise-tracker';
import { Colaborador } from '../settings/Colaborador';
import { notifyError } from './ServiceApi';
import { AvaliacaoInteface } from '../settings/AvaliacaoInterface';
import { baseUrlDev } from '../settings/consts/baseUrl';

export const salvarColaborador = async (data: {
  nomeColaborador: string;
  siglaColaborador: string;
}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: data.nomeColaborador, sigla: data.siglaColaborador })
  };

  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(
        fetch('http://localhost:8080/colaborador', requestOptions)
      )
    );
  });
};

export const getColaboradores = async () => {
  return new Promise<Colaborador[]>((resolve) => {
    resolve(
      trackPromise(
        fetch('http://localhost:8080/colaborador')
          .then((response) => response.json())
          .catch(() => notifyError())
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
        fetch(`${baseUrlDev}/avaliacoes/${avaliacaoId}`, {
          method: 'DELETE',
        }).catch(() => notifyError())
      )
    );
  });
};
