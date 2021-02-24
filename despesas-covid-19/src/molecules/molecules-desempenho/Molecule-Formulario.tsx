import AtomCampoTexo from '../../atoms/atoms-desempenho/Atom-campo-texto-mascara';
import AtomCampoTexoMascara from '../../atoms/atoms-desempenho/Atom-campo-texto';
import AtomBotao from '../../atoms/atoms-desempenho/atom-botao';
import * as React from 'react';
import { StyledComponent } from 'styled-components';

export const MoleculeFormulario = (props: {
  style: StyledComponent<'div', any, {}>;
  register: any;
}) => {
  return (
    <props.style>
      <AtomCampoTexo
        label="Nome colaborador"
        name="nomeColaborador"
        register={props.register}
      />
      <AtomCampoTexoMascara
        mask="aaa"
        label="sigla colaborador"
        name="siglaColaborador"
        register={props.register}
      />
      <AtomBotao />
    </props.style>
  );
};

export default AtomCampoTexoMascara;
