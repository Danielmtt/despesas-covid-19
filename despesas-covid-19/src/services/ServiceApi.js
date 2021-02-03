import a from './requisicao.json';

export const getCovidSpendingByMonthYear = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(a.Profile);
    }, 2000)
  );
};
