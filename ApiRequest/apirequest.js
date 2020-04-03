
import { AsyncStorage,Alert} from "react-native";
var STORAGE_KEY = 'id_token';
  _onValueChange = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
      if(selectedValue===undefined)
      {
        this.setState({correctcompte: false});
      }
      else{
      this.setState({correctcompte: true});
      }
  
     
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  export function _userSignup(login,password) {


    fetch("http://coronna.frsdev.ovh:8081/v2/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: login,
        password: password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      _onValueChange(STORAGE_KEY, responseData.token),
     
      Alert.alert(responseData.token===undefined?
        'Problème !':"Signup Success!",
        responseData.token===undefined?'compte n existe pas':'',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    })
    .done();
  
}
