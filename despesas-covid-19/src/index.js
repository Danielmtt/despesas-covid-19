// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Home from './pages/Home.tsx';
// import reportWebVitals from './pages/reportWebVitals';
// import { ToastContainer } from 'react-toastify';
// import App from './pages/App';
// import { DespesasProvider } from './providers/despesas-context';

// ReactDOM.render(
//   <>
//     <ToastContainer />
//     <Home />
//   </>,
//   document.getElementById('root')
// );
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DespesasCovidPage from './pages/DespesasCovidPage.tsx';
import DespesasBolsaFamiliaPage from './pages/DespesasBolsaFamiliaPage.tsx';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.tsx';
import { DespesasProvider } from './providers/despesas-context';
import Menu from './templates/Menu';
import { BolsaFamiliaProvider } from './providers/bolsa-familia-context';

ReactDOM.render(
  <Router>
    <Menu />
    <Switch>
      <Route path="/despesas/covid-19">
        <DespesasProvider>
          <DespesasCovidPage />
        </DespesasProvider>
      </Route>

      <Route path="/despesas/bolsa-familia">
        <BolsaFamiliaProvider>
          <DespesasBolsaFamiliaPage />
        </BolsaFamiliaProvider>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
