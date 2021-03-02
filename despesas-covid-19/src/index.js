import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DespesasCovidPage from './pages/DespesasCovidPage.tsx';
import DespesasBolsaFamiliaPage from './pages/DespesasBolsaFamiliaPage.tsx';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.tsx';
import { DespesasProvider } from './providers/despesas-context';
import Menu from './templates/Menu';
import Desempenho from './templates/Desempenho.tsx';
import { BolsaFamiliaProvider } from './providers/bolsa-familia-context';
import Spinner from './atoms/atmos-despesas-publicas/Spinner';
import styled from 'styled-components';
import { DesempenhoAvaliacoesProvider } from './providers/desempenho-avaliacoes-context';

const LoaderCSS = styled.div`
  top: 0;
`;

ReactDOM.render(
  <Router>
    <LoaderCSS>
      <Spinner />
    </LoaderCSS>
    <Menu />
    <Switch>
      <Route path={['/covid-19/:ano/:mes', '/covid-19']}>
        <DespesasProvider>
          <DespesasCovidPage />
        </DespesasProvider>
      </Route>
      <Route path={'/bolsa-familia'}>
        <BolsaFamiliaProvider>
          <DespesasBolsaFamiliaPage />
        </BolsaFamiliaProvider>
      </Route>
      <Route path={'/desempenho'}>
        <DesempenhoAvaliacoesProvider>
          <Desempenho />
        </DesempenhoAvaliacoesProvider>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
