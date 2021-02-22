export interface DespesasBolsaFamilia {
  valor: string;
  dataReferencia: string;
  quantidadeBeneficiados: string;
  municipio: {
    nomeIBGE: string;
    nomeRegiao: string;
    uf: string;
  };
}
