export interface DespesasBolsaFamilia {
  valor: string;
  quantidadeBeneficiados: string;
  municipio: {
    nomeIBGE: string;
    nomeRegiao: string;
    uf: string;
  };
}
