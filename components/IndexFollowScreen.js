import React, { Component} from 'react';

import { AsyncStorage,StyleSheet,TouchableHighlight,TextInput,CheckBox,Image,Alert} from "react-native";

import { Container, Header,View, Tab, Tabs, TabHeading, Icon, Text,Button, Left, Body } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Editpatient from './patient/Editpatient';
import Listpatient from './patient/Listpatient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _getToken,_deconnection} from '../Store/actions';
const br = `\n`;
var STORAGE_KEY = 'id_token'
var valuetoken=""
 class IndexFollowScreen extends Component {

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
_deconnexion()
{

  this.setState({
    correctcompte: false,
    password:""

  })


 this.props._deconnection();
}
_Connexion()
{

  this.setState({correctcompte: true})

}

_userSignup(login,password) {
  this.props._getToken(login,password);
}

render() {

  console.log("gggggggggggggggggggggggggggg :             "+this.props.token)
  if (this.props.token==-1||this.props.token==null) {
    return (
  
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Connexion!</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.textlabel}> البريد الإلكتروني :  </Text> 
                  
                  <TextInput
                    placeholder="البريد الإلكتروني"
                    style={styles.textInput}
                    autoCapitalize = 'none'
                    value={this.state.login} onChangeText={ (text) => this.setState({ login: text }) }
                  />
                    <Text style={styles.textlabel}> </Text> 
                    <Text style={styles.textlabel}> كلمة السر :  </Text> 
                  <TextInput
                    placeholder="كلمةالسر" 
                    secureTextEntry={!this.state.hidepassword}
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
                      <Text style={{marginTop: 5}}> إظهار كلمة المرور</Text>
                    </View>
       <Text style={styles.textlabel}> </Text> 
        </View>
        <View style={styles.row}>
        <TouchableHighlight  onPress={() => this._userSignup(this.state.login,this.state.password)} style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>تسجيل الدخول</Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => this._Inscription("Inscription","إنشاء حساب")} style={styles.button}  underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>إنشاء حساب</Text>
          </TouchableHighlight>

        </View>

      </View>
  
);
  }

  else{
    return (
      <Container>
  
        <Header style={{backgroundColor:'white'}} hasTabs >
        <View style={styles.innerContainer}> 
        <Image style={styles.picture} source={require('../assets/logo.png')}/>
        <Text style={{color: 'blue',fontSize: 20 ,textDecorationLine: 'underline'}}
             onPress={() => this._deconnexion()}>
            الخروج  
            </Text>
            </View>
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

},
innerContainer:{  
  // flex: 1,  
   width: "100%",  
   flexDirection: "row",  
   justifyContent: "space-between",  
   alignItems: "center"  
}
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _getToken: _getToken,
    _deconnection:_deconnection
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    token: state.token
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexFollowScreen);