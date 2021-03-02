import * as React from 'react';
import { useEffect, useState } from 'react';
import AtomGraficoVis from '../../atoms/atoms-desempenho/Atom-Grafico-Vis';
import { listarAvaliacoesGrafico } from '../../services/Service-desempenho';
import { GraficoAvaliacoesResponse } from '../../settings/GraficoAvaliacoesResponse';

export default function MoleculeGrafico() {
  //const [listaAvaliacoes, setListaAvaliacoes] = useState<GraficoAvaliacoesResponse[]>([]);
  const [listaItem, setListaItem] = useState<any[]>([{}]);
  const lista: any[] = [];

  const buscarAvaliacoes = () => {
    listarAvaliacoesGrafico(['1','2']).then(
      (response: GraficoAvaliacoesResponse[]) => {
        //setListaAvaliacoes(response);
        response.map((avaliacoes) => {
          lista.push(avaliacoes);
          // console.log(avaliacoes);
          // avaliacoes.avaliacoes.map((itemAvaliacao) => {
          //   lista.push(itemAvaliacao);
          // })
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

  // const dadosGrafico = () => {
  //   listaAvaliacoes.map((avaliacoes) => {
  //     console.log(avaliacoes)
  //     avaliacoes.avaliacoes.map((itemAvaliacao) => {
  //       // console.log(itemAvaliacao);
  //       lista.push(itemAvaliacao);
  //       // setListaItem([
  //       //   ...listaItem,
  //       //   {
  //       //     x: itemAvaliacao.mesAno,
  //       //     y: itemAvaliacao.nota
  //       //   }
  //       // ])
  //     })
  //   })

  //   lista?.map((item) => {
  //     return item.x = item.mesAno, item.y = item.nota
  //   })

  //   setListaItem(lista);
    
  //   console.log(listaItem);
  //   console.log(lista)
  // }

  useEffect(() => {
    buscarAvaliacoes();
  }, []);

  return (
    <>
      <AtomGraficoVis dados={listaItem} />
    </>
  );
} 