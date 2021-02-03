export const getCovidSpendingByMonthYear = async(date, page) => {
    const headers = new Headers();
    headers.append('chave-api-dados', '85260d138512b44976de13aaf7766f89');
    headers.append('Content-Type', 'application/json');
    headers.append('Accepted', '*/*');
    const params = {
        method: 'GET',
        headers: headers,
    }
    return new Promise(
        resolve => fetch(`http://www.portaltransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?mesAnoLancamento=${date}&pagina=${page}`, params)
        .then((response)=>response.json())
        .then((dados) => {
            console.log(dados);
            resolve(dados)
        })
    )
}