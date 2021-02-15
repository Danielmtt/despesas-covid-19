import * as React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { notifyError } from './ServiceApi';



export const getBolsaFamiliaSpendingByMonthYearAndIbge = async (mesAno: string, codigoIbge: string) => {
	return new Promise((resolve) => {
	  resolve(
		trackPromise(
		  fetch(
			`https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=${mesAno}&codigoIbge=${codigoIbge}`,
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