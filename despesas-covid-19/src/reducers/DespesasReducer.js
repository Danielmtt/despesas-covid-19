const stateDespesas = {
  despesas: [ {

  } ]
}

const DespesasReducer = (state = stateDespesas, action) => {
  switch(action.type){
  case 'SET_DESPESAS':
    return {...state, despesas: action.payload.despesas}
  }
  return state
}

export default DespesasReducer;