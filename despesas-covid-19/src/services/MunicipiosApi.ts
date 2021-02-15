import * as React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { notifyError } from './ServiceApi';

export const getMunicipios = async () => {
  return new Promise((resolve) => {
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
