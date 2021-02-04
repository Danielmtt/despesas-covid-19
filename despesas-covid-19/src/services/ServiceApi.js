import profile from './requisicao.json';

export let dataCOVID19;

export const getCovidSpendingByMonthYear = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      dataCOVID19 = profile.Profile;
      resolve(profile.Profile);
    }, 2000)
  );
};
