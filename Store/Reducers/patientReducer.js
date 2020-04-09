import {CREATEPATIENT_SYMTOME_ANTECEDENT,FETCH_PATIENT,ADD_PATIENT} from '../actions';
let patientslist;
export default function (state = null, action) {
  if (action) {
    switch (action.type) {

      case FETCH_PATIENT:
      state =  action.payload;
      patientslist=action.payload;
      break;

      case ADD_PATIENT:
      if (state) {
       state = Array.from(state);
       state.push(action.payload);
       patientslist.push(action.payload);
     }
     else {
       state = [action.payload];
     }
     break;

      case CREATEPATIENT_SYMTOME_ANTECEDENT:
        state =  action.payload;
        patient=action.payload;
        break;
      
        
    }}
  return state;
}