export interface GraficoAvaliacoesResponse {
  idColaborador: number;
  nomeSiglaColaborador: string;
  avaliacoes: GraficoAvaliacao[];
}

export interface GraficoAvaliacao {
  id: number;
  mesAno: string;
  nota: number;
  resultado: string;
}
