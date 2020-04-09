import { combineReducers } from 'redux';
import tokenReducer from '../Store/Reducers/tokenReducer';
import patientReducer from '../Store/Reducers/patientReducer';
const rootReducer = combineReducers({
  token: tokenReducer,
  patientslist:patientReducer
});

export default rootReducer;