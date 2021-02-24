export interface TabsInterface {
  arrayOpcoes: Array<Opcao>;
  key?: number;
}

export interface Opcao {
  nomeTab: string;
  componente: any[];
}
