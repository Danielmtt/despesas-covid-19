export interface DespesasBolsaFamilia {
  quantidadeBeneficiados: number;
  dataReferencia: string;
  valor: number;
  id: number;

  municipio: {
    codigoIBGE: string;
    nomeIBGE: string;
    nomeIBGEsemAcento: string;
    pais: string;
    nomeRegiao: string;
    codigoRegiao: string;
    uf: {
      sigla: string;
      nome: string;
    };
  };
  tipo: {
    id: number;
    descricao: string;
    descricaoDetalhada: string;
  };
}