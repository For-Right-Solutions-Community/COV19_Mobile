import React from "react";
import { StyleSheet,TouchableHighlight,TextInput,CheckBox} from "react-native";
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';



const br = `\n`;
export default class Authentification extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
        login:'',
        password:'',
        hidepassword:false,
        iscorrectcompte:false
        
    })
  }
  _Inscription()
  {
    this.props.navigation.navigate("Inscription")
  }
  _Connexion()
  {

    this.setState({hidepassword: !this.state.hidepassword})
 
  }

  render() {

      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.title}>Connexion!</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.textlabel}> Login :  {br}</Text> 
                    
                    <TextInput
                      placeholder="Login"
                      style={styles.textInput}
                      value={this.state.login} onChangeText={ (text) => this.setState({ login: text }) }
                    />
                      <Text style={styles.textlabel}> </Text> 
                      <Text style={styles.textlabel}> Mot de passe :  {br}</Text> 
                    <TextInput
                      placeholder="Mot de passe" secureTextEntry={!this.state.hidepassword}
                      style={styles.textInput}
                      value={this.state.password} onChangeText={ (text) => this.setState({ password: text }) }
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
          <TouchableHighlight  style={styles.button} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Connexion</Text>
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => this._Inscription()} style={styles.button}  underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableHighlight>
 
          </View>
  
        </View>
      );
    }

  }
  
  



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
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