import * as React from 'react';
import styled from 'styled-components';
import FormularioConsultaBolsaFamilia from '../molecules/FormularioConsultaBolsaFamilia';

const BoxCard = styled.div`
    width: 100%;
    text-align: center;
`
const CardFormulario = () => {
    return(
        <BoxCard>
            <FormularioConsultaBolsaFamilia />
        </BoxCard>
    )
}

export default CardFormulario; 