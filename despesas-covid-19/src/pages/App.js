import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DespesasCovidPage from './DespesasCovidPage';
import DespesasBolsaFamiliaPage from './DespesasBolsaFamiliaPage';
import React from 'react';
import Menu from '../templates/Menu';

function App() {
  return (
    <Router>
      <Menu />

      <header>
        <Switch>
          <Route path="/covid-19/0/0">
            <DespesasCovidPage />
          </Route>

          <Route path="/bolsa-familia">
            <DespesasBolsaFamiliaPage />
          </Route>

          <Route path="/">
            <div>
              <h1>Homepage de despesas</h1>
            </div>
          </Route>
        </Switch>
      </header>
    </Router>
  );
}

export default App;
