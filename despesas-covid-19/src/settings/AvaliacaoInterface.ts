export interface AvaliacaoInteface {
  id: number;
  tipoAvaliacao: string;
  resultado: string;
  status: string;
  data: string;
  nota: number;
  colaborador: AvaliacaoColaboradorInterface
}

interface AvaliacaoColaboradorInterface {
  id: number;
  nome: string;
  sigla: string;
}