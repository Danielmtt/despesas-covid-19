import * as React from 'react';
import { useEffect, useState } from 'react';
import AtomGraficoVis from '../../atoms/atoms-desempenho/Atom-Grafico-Vis';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';
import { listarAvaliacoesGrafico } from '../../services/Service-desempenho';
import { Colaborador } from '../../settings/Colaborador';
import { GraficoAvaliacoesResponse } from '../../settings/GraficoAvaliacoesResponse';

export default function MoleculeGrafico() {
  const {colaboradoresSelecionados} = React.useContext<any>(DesempenhoAvaliacoesContext);
  const [listaItem, setListaItem] = useState<any[]>([{}]);
  const lista: any[] = [];

  const buscarAvaliacoes = () => {
    const listaIdsColaboradores: string[] = [];
    colaboradoresSelecionados.map((colaboradores: Colaborador) => {
      listaIdsColaboradores.push(colaboradores.id.toString());
    })
    listarAvaliacoesGrafico(listaIdsColaboradores).then(
      (response: GraficoAvaliacoesResponse[]) => {
        response.map((avaliacoes) => {
          lista.push(avaliacoes);
        })
        lista.map((items) => {
          items.avaliacoes.map((item) => {
            return item.x = item.mesAno, item.y = item.nota
          })
        })
        console.log(lista);
        setListaItem(lista);
      }
    )
  }

  useEffect(() => {
    buscarAvaliacoes();
  }, [colaboradoresSelecionados]);

  return (
    <>
      <AtomGraficoVis dados={listaItem} />
    </>
  );
} 