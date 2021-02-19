import { trackPromise } from 'react-promise-tracker';
import { Distrito } from '../settings/Municipio';
import { notifyError } from './ServiceApi';

export const getBolsaFamiliaSpendingByMonthYearAndIbge = async (
  mesAno: string,
  codigoIbge: string
) => {
  return new Promise<any[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(
          `http://localhost:8080/despesas/BolsaFamilia/${mesAno}/${codigoIbge}`,
          {
            headers: {
              Accept: '*/*',
              'chave-api-dados': 'cd628a98add0946165e28dc947665a90',
            },
          }
        )
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};

export const getMunicipios = async () => {
  return new Promise<Distrito[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(
          'https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome'
        )
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};
