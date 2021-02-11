import React, { useContext } from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import {
  getCovidSpendingByMonthYear,
  notify,
  sortItemsByPago,
} from '../services/ServiceApi.js';
import { DespesasContext } from '../providers/despesas-context.js';
import { Mes } from '../settings/Mes.js';

export const meses: Mes[] = 
  [
    {nome: 'Janeiro', valor: '01'},
    {nome: 'Fevereiro', valor: '02'},
    {nome: 'Março', valor: '03'},
    {nome: 'Abril', valor: '04'},
    {nome: 'Maio', valor: '05'},
    {nome: 'Junho', valor: '06'},
    {nome: 'Julho', valor: '07'},
    {nome: 'Agosto', valor: '08'},
    {nome: 'Setembro', valor: '09'},
    {nome: 'Outubro', valor: '10'},
    {nome: 'Novembro', valor: '11'},
    {nome: 'Dezembro', valor: '12'},
  ];

export default function gerarLinhaMesAno(valorAno: number) {
  const { setDespesas, setPaginaAtual } = useContext<any>(DespesasContext);

  const getApiService = (valorAno: string, valor: string) => {
    setPaginaAtual(1);
    getCovidSpendingByMonthYear(valorAno + valor, 1).then((dados) => {
      if (dados.length === 0) {
        notify();
      }
      console.log(sortItemsByPago(dados));
      setDespesas(sortItemsByPago(dados));
    });
  };

  if (valorAno < new Date().getFullYear()) {
    return meses.map((valor) => (
      <TreeItem
        onClick={() => getApiService(valorAno.toString(), valor.valor)}
        nodeId={`${valorAno}${valor.valor}`}
        key={`${valorAno}${valor.valor}`}
        label={`${valor.nome}`}
      />
    ));
  } else {
    return meses
      .filter((valor) => parseInt(valor.valor, 10) <= new Date().getMonth())
      .map((valor) => (
        <TreeItem
          onClick={() => getApiService(valorAno.toString(), valor.valor)}
          nodeId={`${valorAno}${valor.valor}`}
          key={`${valorAno}${valor.valor}`}
          label={`${valor.nome}`}
        />
      ));
  }
}
