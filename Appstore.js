import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Store/combineReducers';
import {_getToken,getUserToken} from './Store/actions'
const store = createStore(reducers, applyMiddleware(thunk));
var login = "login"
var password = 'password';
var STORAGE_KEY = 'id_token';
import { AsyncStorage } from "react-native"
export default class Appstore extends React.Component {
  constructor(props) {
    super(props);
    // load all lists
    store.dispatch(getUserToken())

 
  }



  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

