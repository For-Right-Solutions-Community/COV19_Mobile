import { AsyncStorage } from "react-native"
var login = "login"
var password = 'password';
var STORAGE_KEY = 'id_token';
var user = 'user';
export async function  _storgelogin() {
    try {
        const valuelogin = await AsyncStorage.getItem(login);
        const valuepassword = await AsyncStorage.getItem(password);
  
          return {"login":valuelogin,"password":valuepassword}
        //}
       } catch (error) {
        console.log(error);
       }
}

export async function  _storgetocken() {
    try {
        const valuetocken = await AsyncStorage.getItem(STORAGE_KEY);
        let valueuserid = JSON.parse(await AsyncStorage.getItem(user));

          return {"token":valuetocken,"user":valueuserid}
        //}
       } catch (error) {
        console.log(error);
       }
}

export async function  _onValueChange(item,selectedValue) {
    try {
        await AsyncStorage.setItem(item, selectedValue);
       
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
}

