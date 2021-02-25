import * as React from 'react';
import { MoleculeGridAvaliacao } from '../../molecules/molecules-desempenho/molecule-grid-avaliacao';
import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';

const mock: AvaliacaoInteface[] = [
  {
    id: 1,
    tipoAvaliacao: 'Informal',
    resultado: 'Mérito',
    status: 'Em aprovação',
    data: '2020-02-24',
    nota: 3.00,
    colaborador: {
      id: 1,
      nome: 'Victor Alves Farias',
      sigla: 'VAL'
    }
  },
  {
    id: 2,
    tipoAvaliacao: 'Informal',
    resultado: 'Mérito',
    status: 'Em aprovação',
    data: '2020-02-24',
    nota: 3.00,
    colaborador: {
      id: 2,
      nome: 'Vitor',
      sigla: 'VTR'
    }
  }
]

export const OrganismeGridAvaliacoes = () => {
  return <MoleculeGridAvaliacao data={mock} />
}