import { trackPromise } from 'react-promise-tracker';
import { baseUrlDev } from '../settings/consts/baseUrl';
import { notifyError } from './ServiceApi';

export const getAll = async () => {
  return new Promise<any[]>((resolve) => {
    resolve(
      trackPromise(
        fetch(`${baseUrlDev}/avaliacao`)
          .then((response) => response.json())
          .catch(() => notifyError())
      )
    );
  });
};