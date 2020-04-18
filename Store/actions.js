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
//var pathglobale="http://192.168.0.5:8080";
const SUBSCRIPE_URL =  "/m/account/subscribe";
const VALIDATE_URL =  "/m/account/validate";
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

export const saveSubscribeuser = subscribe => ({
  type: 'SAVE_SUBSCRIBE',
  subscribe
});


export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token,
});

export const saveToken = token => ({
  type: 'SAVE_TOKEN',
  token
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});

export const loading = bool => ({
  type: 'LOADING',
  isLoading: bool,
});

export const error = error => ({
  type: 'ERROR',
  error,
});

export const userfetchPatient = patientslist => ({
  type: 'FETCH_PATIENT',
  patientslist
});

export const addPatient = addPatient => ({
  type: 'ADD_PATIENT',
  addPatient
});


export  function  _subscribeuser(login,password) {

  var user={
    "username":login,
    "password":password
  }
  return dispatch =>
        axiosapi.post(SUBSCRIPE_URL,user,{headers:{'Content-Type': 'application/json'}}).then((reponse) => {
          console.log(reponse)
          //on succes on cree un token
        
          if(reponse.data=="email sent")
           dispatch(saveSubscribeuser(true));
           else
           dispatch(saveSubscribeuser(false));
           
           
      })
        .catch ( (error) =>  {
          Alert.alert(
            'Problème !',
            'Vérifier votre compte '+error,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
          /*
            console.error(error.response);
            console.error(error);
            return null
            */
        })

}


export  function  _createUser(login,password,validationcode) {

  var user={
    "username":login,
    "password":password
  }
  let account = { "user":user,"confirmationCode": validationcode};
  return dispatch =>
  axiosapi.post(VALIDATE_URL,account).then((responseData) => {
    dispatch(saveUserToken(login,password));
})
        .catch ( (error) =>  {
            console.error(error.response);
            console.error(error);
            return null
        })

}




export async function  _fetchPatientx(token) {

 
 
  return new Promise(resolve => {
    AsyncStorage.getItem('user').then((data1) => {
      console.log("data1   "+JSON.parse(data1).id);
      const iduser=JSON.parse(data1).id;
      axiosapi.get("/m/user/"+iduser+"/patients",
      {headers:{'Authorization': "Bearer "+token,"Content-Type":"application/json"}}).then((reponse) => {
        let patientslist  =  JSON.stringify(reponse.data);
       //let patientslist  =  reponse.data;
        console.log("yyyyyyyyyyyyyyyyyyy:         "+JSON.stringify(reponse.data));
        resolve(patientslist) ;
  
      })
      .catch ( (error) =>  {
        /*
          console.error(error.response);
          console.error(error);
       */
          resolve(null) ;
          Alert.alert(
            'Problème !',
            'Vérifier votre compte '+error,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
      })
    }).catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
  })


       

});
}


export const getUserToken = () => dispatch => 

 AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
            console.log(data)
            
            if(data!==null)
            {
              _fetchPatientx(data).then((patientslist)=>
              {
                if(patientslist==null)
                {
                  
                }
                dispatch(userfetchPatient(JSON.parse(patientslist)));
              });
            }
            else
            {
              dispatch(userfetchPatient(null));
            }
          
      
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export function saveUserToken(login,password) {
  return dispatch =>
fetch(pathglobale+LOGIN_URL, {
  method: "POST",
  headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: login,
        password: password,
      })
    }) .then((response) => response.json()).then((responseData) => {

      if(responseData.token==undefined)
      {
          dispatch(loading(false));
          dispatch(error(err.message || 'ERROR'));
      }
      else
      {
          AsyncStorage.setItem('userToken', responseData.token)
          .then(() => {
              console.log(responseData.token)
              dispatch(loading(false));
              dispatch(saveToken('token saved'));
              dispatch(getToken(responseData.token));
              console.log("xxxxxxxxxxxxxxxxxxxxxxxx:         "+responseData.token);
              if(responseData.token!==null)
              {
                _fetchPatientx(responseData.token).then((patientslist)=>
                {
              
                  dispatch(userfetchPatient(JSON.parse(patientslist)));
                });
              }
              else
              {
                dispatch(userfetchPatient(null));
              }
          })
          .catch((err) => {
              dispatch(loading(false));
              dispatch(error(err.message || 'ERROR'));
          })



          AsyncStorage.setItem('user', JSON.stringify(responseData.details))
          .then(() => {
            console.log("tttttttttttttttttttttttt:         ");
              dispatch(saveUser('user saved'));
              dispatch(getUser(JSON.stringify(responseData.details)));
          })
          .catch((err) => {
              dispatch(loading(false));
              dispatch(error(err.message || 'ERROR'));
          })
      }
     

}).catch((err) => {
  Alert.alert(
      'Problème !',
      'Vérifier votre compte ',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
});

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


 function _createpatient(patient) {

  return new Promise(resolve => {


    AsyncStorage.getItem('userToken')
    .then((resultat) => {

      AsyncStorage.getItem('user')
      .then((resultat1) => {

        const iduser=JSON.parse(resultat1).id;
        patient.user={"id":iduser}
        axiosapi.post(ADD_PATIEN_URL,patient,
          {headers:{'Authorization': "Bearer "+resultat,'Content-Type': 'application/json'}}).then((reponse) => {
          resolve(reponse);

      })
        .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
    
      })
      .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
     });
         
    
  });
}

 export function _createsymtome(symtome) {
  return new Promise(resolve => {


    AsyncStorage.getItem('userToken')
    .then((resultat) => {
    
        axiosapi.post(ADD_SYMPTOM_URL,symtome,
          {headers:{'Authorization': "Bearer "+resultat,'Content-Type': 'application/json'}}).then((reponse) => {
    
            console.log("reponse    "+reponse);
          resolve(reponse);
    
      })
      .catch ( (error) =>  {
          console.error(error.response);
          console.error(error)
      })
     });
         

  });
}


export function _updatepatient(patient) {
  return new Promise(resolve => {


    AsyncStorage.getItem('userToken')
    .then((resultat) => {
    
        axiosapi.put(UPDATE_PATIEN_URL+patient.id,patient,
          {headers:{'Authorization': "Bearer "+resultat,'Content-Type': 'application/json'}}).then((reponse) => {
    
            console.log("reponse    "+reponse);
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


    AsyncStorage.getItem('userToken')
    .then((resultat) => {
    
        axiosapi.post(UPDATE_ANTECEDENT_URL,antecedent,
          {headers:{'Authorization': "Bearer "+resultat,'Content-Type': 'application/json'}}).then((reponse) => {
      
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

export  function _createPatientSymtomeAntecedent(ipatient,isymtome,iantecedent) {

  return dispatch => {

  
    _callcreatePatientSymtomeAntecedent(ipatient,isymtome,iantecedent).then((patient) => {
      dispatch(addPatient(patient));
    });

 

       
  }
}


async function _callcreatePatientSymtomeAntecedent(ipatient,isymtome,iantecedent) {

  console.log("ipatient   "+JSON.stringify(ipatient));
    let patientadded = await _createpatient(ipatient);
   let patient = {"id":patientadded.data.id};
   isymtome.patient=patient;
  
   iantecedent.patient=patient;

   let symtome = await _createsymtome(isymtome);
   /*
   antecedent = await _createantecedent(iantecedent);
   */
  console.log(patientadded.data.id);
  return patientadded;
}



export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeToken(data));
            dispatch(userfetchPatient(null));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })