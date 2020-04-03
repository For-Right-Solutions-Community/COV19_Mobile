import {GET_TOKEN,DECONNECTION,SIGNUP} from '../actions';

export default function (state = null, action) {
  if (action) {
    switch (action.type) {
      case GET_TOKEN:
        state =  action.payload;
        token=action.payload;
        break;
        case DECONNECTION:
        state =  action.payload;
        token=action.payload;
        break;
        case SIGNUP:
        state =  action.payload;
        token=action.payload;
        break;
    }}
  return state;
}