import { trackPromise } from 'react-promise-tracker';
import { SalvarAvaliacaoRequest } from '../settings/SalvarAvaliacaoRequest';
import { Colaborador } from '../settings/Colaborador';
import { notifyError } from './ServiceApi';
import { AvaliacaoInteface } from '../settings/AvaliacaoInterface';
import { baseUrlDev } from '../settings/consts/baseUrl';

const baseUrl = 'http://localhost:8080';

// TODO: alterar para END-POINT certo
export const salvarColaborador = async (data: {
  nomeColaborador: string;
  siglaColaborador: string;
}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: data.nomeColaborador,
      sigla: data.siglaColaborador,
    }),
  };

  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(fetch('http://localhost:8080/colaborador', requestOptions))
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

export const listarColaboradores = async () => {
  return new Promise<any[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrl}/colaborador`).then((response) => response.json())
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
        fetch(`${baseUrl}/avaliacoes`, options)
          .then((response) => response.json())
          .catch(() => console.log())
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

export const uploadArquivo = async (excel: any) => {
  const options: any = {
    method: 'POST',
    body: excel,
  };

  if (options && options.headers) {
    delete options.headers['Content-Type'];
  }

  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrlDev}/avaliacoes/upload`, options)
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};

export const listarAvaliacoesGrafico = async (idColaboradores: string[]) => {
  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(
        fetch(
          `${baseUrlDev}/colaborador/grafico?id=${idColaboradores.join(',')}`
        )
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};

export const deleteColaborador = async (colaboradorId: number) => {
  return new Promise<any>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrlDev}/colaborador/${colaboradorId}`, {
          method: 'DELETE',
        }).catch(() => notifyError())
      )
    );
  });
};
