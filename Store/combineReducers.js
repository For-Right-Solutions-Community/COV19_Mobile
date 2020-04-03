import { combineReducers } from 'redux';
import tokenReducer from '../Store/Reducers/tokenReducer';
const rootReducer = combineReducers({
  token: tokenReducer,
  
});

export default rootReducer;