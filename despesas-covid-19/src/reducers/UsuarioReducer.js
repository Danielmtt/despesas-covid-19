const initialState = {
  name: 'Visitante',
  contador: 10,
};
const UsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NAME':
    return { ...state, name: action.payload.name };
    
  case 'INCREMENT_CONTADOR': {
    let newCount = state.contador + 1;
    return {...state, contador: newCount};
  }
    
  }
  

  return state;
}; 

export default UsuarioReducer;
