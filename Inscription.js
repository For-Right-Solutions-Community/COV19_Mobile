import React from "react";
import { AsyncStorage,Animated, Dimensions, Keyboard,UIManager,StyleSheet,TouchableHighlight,TextInput,CheckBox,Alert} from "react-native";
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';


const br = `\n`;
var STORAGE_KEY = 'id_token'
const { State: TextInputState } = TextInput;
export default class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      shift: new Animated.Value(0),
        email:'',
        password:'',
        password1:'',
        hidepassword:false,
        
    })
  }
  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }
  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height+20;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }
  _affichePassWord(){
    this.setState({hidepassword: !this.state.hidepassword})
}


_enregistrer() {

  if(this.state.password===this.state.password1)
  {
    fetch("http://coronna.frsdev.ovh:8081/m/user/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this._userSignup(responseData)
    })
    .done();
  }
  else{
    Alert.alert(
      'Problème !',
      'Les mots de passes ne sont pas identiques',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }


}
_userSignup(responseData) {


  fetch("http://192.168.0.5:8080/v2/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.login,
      password: this.state.password,
    })
  })
  .then((response) => response.json())
  .then((responseData) => {
    this._onValueChange(STORAGE_KEY, responseData.token),
   
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
async _onValueChange(item, selectedValue) {
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

  render() {
    const { shift } = this.state;
    return (
      <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
       <View style={styles.row}>
            <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
          </View>
        <View style={styles.row}>
        <Text style={styles.textlabel}> Votre Email : </Text> 
                  
                  <TextInput
                    placeholder="Votre Email"
                    style={styles.textInput}
                    value={this.state.email} onChangeText={ (text) => this.setState({ email: text }) }
                  />
                    <Text style={styles.textlabel}> </Text> 
                    <Text style={styles.textlabel}> Votre mot de passe :  </Text> 
                  <TextInput
                    placeholder="Votre mot de passe" secureTextEntry={!this.state.hidepassword}
                    style={styles.textInput}
                    value={this.state.password} onChangeText={ (text) => this.setState({ password: text }) }
                  />
                       <Text style={styles.textlabel}> </Text> 
                       <Text style={styles.textlabel}> Confirmer mot de passe :  </Text> 
                    <TextInput
                    placeholder="Confirmer mot de passe" secureTextEntry={!this.state.hidepassword}
                    style={styles.textInput}
                    value={this.state.password1} onChangeText={ (text) => this.setState({ password1: text }) }
                  />
                <Text style={styles.textlabel}> </Text> 
                
                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.hidepassword}
                  onValueChange={() => this._affichePassWord()}
                />
                <Text style={{marginTop: 5}}> Afficher mot de passe</Text>
              </View>
       <Text style={styles.textlabel}> </Text> 
        </View>
        <View style={styles.row}>
        <TouchableHighlight style={styles.button} onPress={() => this._enregistrer()} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableHighlight>
   
        </View>

   
      </Animated.View>
    );
  }
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  textlabel: {
    fontSize: 24,
    paddingRight:30,
    left:10
  },
  selectedText:
  {
      fontSize: 22,
      backgroundColor: '#DCDCDC',
  },
  textInput: {
    backgroundColor: '#DCDCDC',
    height: 50,
    paddingRight:30,
    fontSize: 18,
    color:"black",

  }
});