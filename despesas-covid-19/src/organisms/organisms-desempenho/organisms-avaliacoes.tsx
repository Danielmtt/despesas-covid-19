import * as React from 'react';
import { MoleculeGridAvaliacao } from '../../molecules/molecules-desempenho/molecule-grid-avaliacao';
import { getAll } from '../../services/AvaliacaoService';
import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';

export function OrganismeGridAvaliacoes() {
  const [avaliacoes, setAvaliacoes] = React.useState<AvaliacaoInteface[]>([]);
  React.useEffect(() => {
    getAll().then((itens: AvaliacaoInteface[]) => {
      if (itens.length > 0) {
        setAvaliacoes(itens);
      }
    })
  }, []);
  return (
    <>
      {avaliacoes.length > 0 && <MoleculeGridAvaliacao data={avaliacoes} />}
    </>
  )
}