import { trackPromise } from 'react-promise-tracker';
import { SalvarAvaliacaoRequest } from '../settings/SalvarAvaliacaoRequest';

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
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tipoAvaliacao: avaliacao.tipoAvaliacao,
      resultado: avaliacao.resultado,
      status: avaliacao.status,
      data: avaliacao.data,
      nota: avaliacao.nota,
    }),
  };
  return new Promise((resolve) => {
    //TODO implementar endpoint para salvar nova avaliação
    resolve(
      console.log(options, avaliacao.idColaborador)

      // trackPromise(
      //   fetch(`TODO_URL_ENDPOINT/${avaliacao.idColaborador}`, options)
      //     .then((response) => {
      //       if (response.status === 200) {
      //         //TODO integração mensagem sucesso
      //         return true;
      //       } else {
      //         console.log(response.json());
      //         //TODO integração mensagem erro
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     })
      // )
    );
  });
};
