import * as React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
export const AtomSweetAlert = (mensagem: string, handleSweetAlert: Function) => {
  MySwal.fire({
    title: <span>{mensagem}</span>,
    footer: 'Iteris 2020',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  }).then((event) => {
    const { isConfirmed } = event;
    if (isConfirmed) {
      handleSweetAlert()
    }
  });
}