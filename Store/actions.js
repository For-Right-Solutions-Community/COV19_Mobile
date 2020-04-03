import { AsyncStorage,Alert } from "react-native"
export const GET_TOKEN = 'GET_TOKEN';
export const DECONNECTION = 'DECONNECTION';
export const SIGNUP = 'SIGNUP';
 var login = 'login'
var  password = 'password';
var STORAGE_KEY = 'id_token';
export function _getToken(login1,password1) {
    return dispatch => {
        fetch("http://coronna.frsdev.ovh:8081/v2/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: login1,
              password: password1,
            })
          })
          .then((response) => response.json()).then((responseData) => {
            _onValueChange(STORAGE_KEY, responseData.token),
     
            Alert.alert(responseData.token===undefined?
              'Problème !':"Signup Success!",
              responseData.token===undefined?'compte n existe pas':'',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            );
            _onValueChange(login,login1);
            _onValueChange(password,password1);
            dispatch({
              type: GET_TOKEN,
              payload: responseData.token
            });
          }).catch((err) => {
            // TODO:
            console.log(err);

            dispatch({
              type: GET_TOKEN,
              payload: null
            });
            
          });
      }

  
}

export function _Signup(login1,password1) {
  return dispatch => {
    fetch("http://coronna.frsdev.ovh:8081/m/user/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: login1,
        password: password1,
      })
    })
        .then((response) => response.json()).then((responseData) => {
          Alert.alert(
            'OK !',
            'Votre compte a été créé avec succès',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
          dispatch({
            type: SIGNUP,
            payload: -1
          });
        }).catch((err) => {
          // TODO:
          console.log(err);
          dispatch({
            type: GET_TOKEN,
            payload: null
          });
          
        });
    }


}

export function _deconnection() {
  return dispatch => {
    dispatch({
      type: DECONNECTION,
      payload: -1
    });
    }


}

_onValueChange = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
   
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}