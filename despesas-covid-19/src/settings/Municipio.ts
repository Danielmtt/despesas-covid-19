export interface Distrito {
  id: number;
  nome: string;
  municipio: Municipio;
}

export interface Municipio {
  id: number;
  nome: string;
}
