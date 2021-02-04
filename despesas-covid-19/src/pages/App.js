import './App.css';
import DespesasCovid from '../templates/Despesas-covid.jsx'
import React from 'react';
import { connect } from 'react-redux';

function App(props) {

  const handleName = () => {
    props.setName('Jorge Aragão');
  }

  const handleIncrement = () => {
    props.increment();
  }

  const getDespesas = () => {
    console.log(props.despesas);
  }

  const setDespesas = () => {
    props.setDespesas([{alo: '123'}])
  }

  return (
    <>
      <DespesasCovid></DespesasCovid>
      Nome: {props.name}
      <br/>
      Contagem: {props.contador}
      <br/>
      <button onClick={handleName}>Setar nome para Jorge Aragão</button>
      <button onClick={handleIncrement}>Aumentar contador</button>
      <button onClick={getDespesas}>Ver despesas no console</button>
      <button onClick={setDespesas}>Definir despesas</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador,
    despesas: state.despesas.despesas
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) => dispatch({
      type: 'SET_NAME',
      payload: { name: newName }
    }),
    increment: () => dispatch({
      type: 'INCREMENT_CONTADOR',
    }),
    setDespesas: (newDespesas) => dispatch({
      type: 'SET_DESPESAS',
      payload: { despesas: newDespesas}
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;