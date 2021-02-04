import { combineReducers } from 'redux';
import DespesasReducer from './DespesasReducer';
import UsuarioReducer from './UsuarioReducer';

export default combineReducers({
  usuario: UsuarioReducer,
  despesas: DespesasReducer,
});
