import {CREATEPATIENT_SYMTOME_ANTECEDENT,FETCH_PATIENT,ADD_PATIENT} from '../actions';
let ipatientslist;
export default function (state = {
  patientslist:"default"
}, action) {
  if (action) {
    switch (action.type) {
      case 'FETCH_PATIENT':

          return { ...state, patientslist: action.patientslist };

      case 'ADD_PATIENT':
      ipatientslist = Array.from(state.patientslist);
      ipatientslist.push(action.addPatient.data);
          return { ...state, patientslist:ipatientslist };
      default:
          return state;
  }}
  return state;
}