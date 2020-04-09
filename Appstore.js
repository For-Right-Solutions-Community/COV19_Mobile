import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Store/combineReducers';
import {_getToken,_fetchPatient} from './Store/actions'
const store = createStore(reducers, applyMiddleware(thunk));
var login = "login"
var password = 'password';
var STORAGE_KEY = 'id_token';
import { AsyncStorage } from "react-native"
export default class Appstore extends React.Component {
  constructor(props) {
    super(props);
    // load all lists
 
    this._storgelogin().then((resultat)=>{
      console.log("xxxxxxxxxxxx "+JSON.stringify(resultat))
      if(resultat===null||resultat.login==null||resultat.password==null)
        store.dispatch(_getToken("@gmail.com","frs123456"));
      else
      store.dispatch(_getToken(resultat.login,resultat.password));
    
   });

   store.dispatch(_fetchPatient())
 
  }



  _storgelogin = async () => {
  
    try {
      const valuelogin = await AsyncStorage.getItem(login);
      const valuepassword = await AsyncStorage.getItem(password);

        return {"login":valuelogin,"password":valuepassword}
      //}
     } catch (error) {
      console.log("yyyyyyyyyyyyyyy ");
      console.log(error);
     }
  }


  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

