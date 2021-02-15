import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import DespesasCovidPage from './DespesasCovidPage';
import DespesasBolsaFamiliaPage from './DespesasBolsaFamiliaPage';
import React from 'react';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/despesas/covid-19">Despesas Covid-19</NavLink>
          </li>
          <li>
            <NavLink to="/despesas/bolsa-familia">
              Despesas Bolsa Família
            </NavLink>
          </li>
        </ul>
      </nav>

      <header>
        <Switch>
          <Route path="/despesas/covid-19">
            <DespesasCovidPage />
          </Route>

          <Route path="/despesas/bolsa-familia">
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
