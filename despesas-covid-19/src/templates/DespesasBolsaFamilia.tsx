import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import BoxPageTitleBolsaFamilia from '../organisms/BoxPageTitleBolsaFamilia';
import CardFormulario from '../organisms/CardFormulario';

const DespesasBolsaFamilia = () => {
    return(
        <>
            <BoxPageTitleBolsaFamilia />
            <CardFormulario />
            <ToastContainer />
        </>
    )
}

export default DespesasBolsaFamilia;