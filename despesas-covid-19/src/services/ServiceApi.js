import profile from './requisicao.json';

export let dataCOVID19 = [];

export let sortItemsByPago = (arrayList) => {
  return arrayList.sort(function (a, b) {
    let aConverted = parseFloat(a.pago.replace(/[.]/g, '').replace(',','.'))
    let bConverted = parseFloat(b.pago.replace(/[.]/g, '').replace(',','.'))
    if (aConverted > bConverted) {
      return -1;
    }
    if (aConverted < bConverted) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}

export const getCovidSpendingByMonthYear = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      dataCOVID19 = sortItemsByPago(profile.Profile);
      resolve(profile.Profile);
    }, 2000)
  );
};
