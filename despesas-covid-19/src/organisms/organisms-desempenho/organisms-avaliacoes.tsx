import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { MoleculeGridAvaliacao } from '../../molecules/molecules-desempenho/molecule-grid-avaliacao';
import {
  getAllAvaliacoes,
  uploadArquivo,
} from '../../services/Service-desempenho';
import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';

export function OrganismeGridAvaliacoes() {
  const [avaliacoes, setAvaliacoes] = React.useState<AvaliacaoInteface[]>([]);
  React.useEffect(() => {
    getAllAvaliacoes().then((itens: AvaliacaoInteface[]) => {
      if (itens.length > 0) {
        setAvaliacoes(itens);
      }
    });
  }, []);

  function salvarArquivo(event: any) {
    const files = event.target.files
    const formData = new FormData()
    formData.append('myFile', files[0])
  

    uploadArquivo(formData);
  }

  return (
    <>
      <input
        type="file"
        onChange={(event) => {
          salvarArquivo(event);
        }}
      />
      {avaliacoes.length > 0 && (
        <MoleculeGridAvaliacao
          data={avaliacoes}
          updateStateAtualizacao={setAvaliacoes}
        />
      )}
      <ToastContainer />
    </>
  );
}
