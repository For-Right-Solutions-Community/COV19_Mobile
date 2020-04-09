import React, { Component} from 'react';

import { AsyncStorage,StyleSheet,TouchableHighlight,TextInput,CheckBox,Image,Alert,ActivityIndicator} from "react-native";

import { Container, Header,View, Tab, Tabs, TabHeading, Icon, Text,Button, Left, Body } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Editpatient from './patient/Editpatient';
import Listpatient from './patient/Listpatient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _getToken,_deconnection} from '../Store/actions';
import datapatient from './patient/Helpers'
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


   if (this.props.token==-1 ||this.props.token==undefined || this.props.patientslist==null) {
    return (
  
      <View style={styles.container}>
        <View style={styles.row}>
        <Image  source={require('../assets/icon1.png')}/>
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
            <Text style={styles.buttonText}> دخول</Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => this._Inscription("Inscription","إنشاء حساب")} style={styles.button}  underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>إنشاء حساب</Text>
          </TouchableHighlight>

        </View>

      </View>
  
);
  }

  else if (this.props.patientslist.length==0) {
      return (
          <Editpatient navigation = {this.props.navigation}>
          </Editpatient>
                     );
    }
    else
    {
      return (
        <Container>
    
          <Header style={{backgroundColor:'white'}} hasTabs >
          <View style={styles.innerContainer}> 
          <Text> </Text> 
          <Text style={{color: 'black',fontSize: 26 ,textDecorationLine: 'underline'}}
               onPress={() => this._deconnexion()}>
              الخروج  
              </Text>
              </View>
          </Header>
          <Tabs  initialPage={0} tabBarPosition="top">
            <Tab heading={ <TabHeading style={{backgroundColor: '#F0493E'}}><Text style={styles.textlabel} >قائمة المرضى</Text></TabHeading>}> 
            <Grid>
             <Listpatient navigation = {this.props.navigation}>
                   </Listpatient>
            </Grid>
            </Tab>
  
          </Tabs>
     
        </Container>
    );
    }
 
  }


//}
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  containerind: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    alignItems: 'center'
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
  backgroundColor: '#F0493E',
  borderColor: '#F0493E',
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
    token: state.token,
    patientslist:state.patientslist
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexFollowScreen);