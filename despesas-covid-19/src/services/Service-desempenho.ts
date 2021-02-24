import { trackPromise } from 'react-promise-tracker';

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
