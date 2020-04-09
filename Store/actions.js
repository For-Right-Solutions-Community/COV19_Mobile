import { AsyncStorage,Alert } from "react-native"
import axios from 'axios'; 
export const GET_TOKEN = 'GET_TOKEN';
export const DECONNECTION = 'DECONNECTION';
export const SIGNUP = 'SIGNUP';
export const CREATEPATIENT_SYMTOME_ANTECEDENT = 'CREATEPATIENT_SYMTOME_ANTECEDENT';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
 var login = 'login'
var  password = 'password';
var STORAGE_KEY = 'id_token';
var pathglobale="https://api.amu190.maodao.xyz";
const LOGIN_URL = "/v2/register";
const SIGNUP_URL = "/m/user/create";
const ADD_PATIEN_URL = "/m/patient/create";
const UPDATE_PATIEN_URL = "/m/patient/";
const FETCH_PATIENT_URL = "/m/patient/";
const ADD_SYMPTOM_URL = "/m/symptom/create";
const UPDATE_ANTECEDENT_URL = "/m/antecedent/create";
const axiosapi = axios.create({
  baseURL: pathglobale,
  timeout: 50000,
  headers: {'Authorization': 'Bearer '}
});

/*
export function _getToken(login1,password1) {
    return dispatch => {
        fetch("http://192.168.0.5:8080/v2/register", {
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
*/
export function _getToken(login1,password1) {
  return dispatch => {
      fetch(pathglobale+LOGIN_URL, {
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
          _onValueChange(STORAGE_KEY, responseData.token);
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
    fetch(LOGIN_URL+SIGNUP_URL, {
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
    _onValueChange(login,"login");
    _onValueChange(password,"password");
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


export function _fetchPatient() {

  return dispatch => {

    _storgetocken().then((resultat)=>{
  
      axiosapi.get(FETCH_PATIENT_URL,
        {headers:{'Authorization': "Bearer "+resultat}}).then((reponse) => {
          userid=3;
          console.log("patients   : "+JSON.stringify(reponse.data[1].user.id));
          let patientslist  =  reponse.data.filter(function (e) {
            if(e.user==null)
            {
                return false;
            }
            return e.user == userid || e.user.id == userid;
        });
        dispatch({
          type: FETCH_PATIENT,
          payload: patientslist
        });
    })
    .catch ( (error) =>  {
        console.error(error.response);
        console.error(error)
    })
   });
       
  }
}


 function _createpatient(patient) {

  return new Promise(resolve => {


      _storgetocken().then((resultat)=>{
    
        axiosapi.post(ADD_PATIEN_URL,patient,
          {headers:{'Authorization': "Bearer "+resultat}}).then((reponse) => {
          resolve(reponse);
      })
      .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
     });
         
    
  });
}

 function _createsymtome(symtome) {
  return new Promise(resolve => {


      _storgetocken().then((resultat)=>{
    
        axiosapi.post(ADD_SYMPTOM_URL,symtome,
          {headers:{'Authorization': "Bearer "+resultat}}).then((reponse) => {
    
          resolve(reponse);
    
      })
      .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
     });
         

  });
}


function _createantecedent(antecedent) {
  return new Promise(resolve => {


      _storgetocken().then((resultat)=>{
    
        axiosapi.post(UPDATE_ANTECEDENT_URL,antecedent,
          {headers:{'Authorization': "Bearer "+resultat}}).then((reponse) => {
      
          resolve(reponse);
    
      })
      .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
     });
         
 
  });
}


_storgetocken = async () => {
  
  try {
    const valuetocken = await AsyncStorage.getItem(STORAGE_KEY);

      return valuetocken
    //}
   } catch (error) {
    console.log(error);
   }
}

export  function _createPatientSymtomeAntecedent(patient,symtome,antecedent) {

  return dispatch => {

  
    _callcreatePatientSymtomeAntecedent(patient,symtome,antecedent).then((reponse) => {
      dispatch({
        type: ADD_PATIENT,
        payload: reponse
      });
    });

 

       
  }
}


async function _callcreatePatientSymtomeAntecedent(ipatient,isymtome,iantecedent) {

    let patientadded = await _createpatient(ipatient);
   let patient = {"id":patientadded.data.id};
   isymtome.patient=patient;
  
   iantecedent.patient=patient;

   let symtome = await _createsymtome(isymtome);
   
   antecedent = await _createantecedent(iantecedent);
   
  console.log(patientadded.data.id);
  return patientadded;
}
