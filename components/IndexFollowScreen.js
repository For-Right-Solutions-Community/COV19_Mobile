import React, { Component} from 'react';

import { AsyncStorage,StyleSheet,TouchableHighlight,TextInput,CheckBox,Image,Alert} from "react-native";

import { Container, Header,View, Tab, Tabs, TabHeading, Icon, Text,Button, Left, Body } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Editpatient from './patient/Editpatient';
import Listpatient from './patient/Listpatient';
//import Authentification  from '../Authentification';
const br = `\n`;
var STORAGE_KEY = 'id_token'
export default class IndexFollowScreen extends Component {

  constructor(props) {

    super(props)

    this.state = {

      drawerClosed: true,
      correctcompte:false,
      login:'',
      password:'',
      hidepassword:false,
      iscorrectcompte:false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

 setDrawerState() {
  this.setState({
    drawerClosed: !this.state.drawerClosed,
  });
}

toggleDrawer = () => {
  if (this.state.drawerClosed) {
    this.DRAWER.openDrawer();
  } else {
    this.DRAWER.closeDrawer();
  }
}

_affichePassWord(){
  this.setState({hidepassword: !this.state.hidepassword})
}
_Inscription(imode,ititle)
{

  this.props.navigation.navigate("Inscription",{mode:imode,title:ititle})
}
_Connexion()
{

  this.setState({correctcompte: true})

}
_userSignup() {


    fetch("http://coronna.frsdev.ovh:8081/v2/register", {
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
  if (this.state.correctcompte) {
    return (
      <Container>
  
        <Header style={{backgroundColor:'white'}} hasTabs >
        <Image style={styles.picture} source={require('../assets/logo.png')}/>
  
        </Header>
        <Tabs  initialPage={0} tabBarPosition="top">
          <Tab heading={ <TabHeading style={{backgroundColor: '#2196F3'}}><Text>Patients</Text></TabHeading>}> 
          <Grid>
           <Listpatient navigation = {this.props.navigation}>
                 </Listpatient>
          </Grid>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#2196F3'}}><Text>Suivi</Text></TabHeading>}> 
           <Grid>
            <Editpatient navigation = {this.props.navigation}>
                 </Editpatient>
          </Grid>
          </Tab>
   
        </Tabs>
   
      </Container>
  );
  }
  else{
    return (
  
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.title}>Connexion!</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.textlabel}> Login :  </Text> 
                    
                    <TextInput
                      placeholder="Login"
                      style={styles.textInput}
                      autoCapitalize = 'none'
                      value={this.state.login} onChangeText={ (text) => this.setState({ login: text }) }
                    />
                      <Text style={styles.textlabel}> </Text> 
                      <Text style={styles.textlabel}> Mot de passe :  </Text> 
                    <TextInput
                      placeholder="Mot de passe" secureTextEntry={!this.state.hidepassword}
                      style={styles.textInput}
                      autoCapitalize = 'none'
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
          <TouchableHighlight  onPress={() => this._userSignup()} style={styles.button} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Connexion</Text>
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => this._Inscription("Inscription","Créer un compte")} style={styles.button}  underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableHighlight>
            <Text style={styles.buttonText}></Text>
            <Text style={{color: 'blue',fontSize: 20 ,textDecorationLine: 'underline'}}
             onPress={() => this._Inscription("Update","Modifier mot de passe")}>
             J'ai oublié mon mot de passe
            </Text>
          </View>
  
        </View>
    
  );
  }


}
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },    addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#2196F3',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
},
textlabel: {
  fontSize: 22,
  paddingRight:10,
  left:10
},
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
})