import React, { Component} from 'react';

import { KeyboardAvoidingView,ProgressBarAndroid,StyleSheet,TouchableHighlight,TextInput,CheckBox,Image,Alert,ActivityIndicator,ScrollView} from "react-native";

import { Container, Header,View, Tab, Tabs, TabHeading, Icon, Text,Button, Left, Body } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Editpatient from './patient/Editpatient';
import Listpatient from './patient/Listpatient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUserToken,removeUserToken,_subscribeuser} from '../Store/actions';
import Menu  from './Menu';
import DrawerLayout from 'react-native-drawer-layout';
import ActionBar from 'react-native-action-bar';
import datapatient from './patient/Helpers'
import Inscription from '../Inscription';
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
      email:'',
      passwordinscription:'',
      passwordinscription1:'',
      hidepassword:false,
      hidepassword1:false,
      iscorrectcompte:false,
      indeterminate:false,
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
_affichePassWordinscription(){
  this.setState({hidepassword1: !this.state.hidepassword1})
}
_Inscription(imode,ititle)
{

  this.props.navigation.navigate("Inscription",{mode:imode,title:ititle})
}

_signOutAsync =  () => {
  this.setState({indeterminate: false});
  this.props.removeUserToken()
      .then(() => {
         // this.props.navigation.navigate('Auth');
      })
      .catch(error => {
          this.setState({ error })
      })
};



_userSignup(login,password) {
  this.setState({indeterminate: true})
  this.props.saveUserToken(login,password).then(()=>{

    if(this.props.token.token==null)
      this.setState({indeterminate: false})

  });
  
}
_subscribeuser()
{

  this.setState({indeterminate: true});

  this.props._subscribeuser(this.state.email,this.state.password).then(() => {
    this.setState({indeterminate: false});
  });

  
}


render() {
  
  if (this.props.token.token=="default"||this.props.patientslist.patientslist=="default") {
    return (
      <ActivityIndicator style={styles.container} animating={true} />
    );
  }

   else if (this.props.token.token==null ||this.props.token.token==undefined||this.props.patientslist.patientslist==null) {
    return (
    



         <Tabs   tabBarPosition="top" tabBarUnderlineStyle={{ backgroundColor: '#f65857' }}  >
            <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}><Text style={styles.textlabeltab} >دخول</Text></TabHeading>}> 
            <Grid>
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
        <View style={styles.containercenter}>
        <Image  source={require('../assets/icon1.png')}/>
        </View>
        <View style={styles.row}>
        <Text style={styles.textlabel}>  </Text> 
        <Text style={styles.textlabel}> البريد الإلكتروني :  </Text> 
                  
                  <TextInput
                    placeholder="البريد الإلكتروني"
                    style={styles.textInput}
                    autoCapitalize = 'none'
                    value={this.state.login} onChangeText={ (text) => this.setState({ login: text.trim() }) }
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
        {this.state.indeterminate ? (

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={this.state.indeterminate}
            progress={0.0}
          />
   
              ) : (
                  <View/>
              )}
        <View style={styles.row}>
        <TouchableHighlight  onPress={() => this._userSignup(this.state.login,this.state.password)} style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}> دخول</Text>
          </TouchableHighlight>

        </View>
        </KeyboardAvoidingView>

      </ScrollView >

            </Grid>
            </Tab>
  

           <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}><Text style={styles.textlabeltab} >  إنشاء حساب </Text></TabHeading>}> 
            <Grid>
            <ScrollView >
              <Inscription/>
         
          </ScrollView >
              </Grid>
              </Tab>



          </Tabs>





    
  
);
  }





  else if (this.props.patientslist.patientslist.length==0) {
      return (
          <Editpatient navigation = {this.props.navigation}>
          </Editpatient>
                     );
    }
  
   
    else
    {
      return (
        <Container>
    {/*
   <Header style={{backgroundColor:'white'}} hasTabs >
   <View style={styles.innerContainer}> 
   <Text> </Text> 
   <Text style={{color: 'black',fontSize: 26 ,textDecorationLine: 'underline'}}
        onPress={() => this._signOutAsync()}>
       الخروج  
       </Text>
       </View>
   </Header>
   */
    }
       
          <DrawerLayout
       
       /* This for set width drawer */
       
       drawerWidth={180}

       /* end */

       ref={drawerElement => {
         this.DRAWER = drawerElement;
       }}

       /* This for set position drawer */

       drawerPosition={DrawerLayout.positions.Right}

       /* end */

       onDrawerOpen={this.setDrawerState}
       onDrawerClose={this.setDrawerState}
       renderNavigationView={() =>  <Menu navigation = {this.props.navigation} _signOutAsync={this._signOutAsync.bind(this)}/>}
     >
     {
       /*
           <ActionBar
         backgroundColor="#4A90E2"
         rightIcons={[
          {
            name: 'menu',
            onPress: this.toggleDrawer,
          },
        ]}
       />*/
     }
   
   
   <ActionBar
            containerStyle={{height:60,alignSelf: 'center',paddingRight:20}}
            backgroundColor={'#fff'}
            title={'Gallery'}
            titleStyle={styles.pageTitle}
   
            rightIcons={[
              {
                name: 'menu',
                onPress: this.toggleDrawer,
                imageStyle:{tintColor: '#000000'}
              },
            ]}
          />
          <Tabs  initialPage={0} tabBarPosition="top">
            <Tab heading={ <TabHeading style={{backgroundColor: '#F0493E'}}><Text style={styles.textlabel} >قائمة المرضى</Text></TabHeading>}> 
            <Grid>
             <Listpatient navigation = {this.props.navigation}>
                   </Listpatient>
            </Grid>
            </Tab>
  
          </Tabs>
          </DrawerLayout>
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
textlabeltab: {
  fontSize: 22,
  paddingRight:10,
  left:10,
  color: '#F0493E'
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
},
containercenter: {
  marginTop: 30,
  justifyContent: 'center',
  alignItems: 'center',
}
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveUserToken: saveUserToken,
    removeUserToken:removeUserToken,
    _subscribeuser:_subscribeuser,
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    token: state.token,
    patientslist:state.patientslist
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexFollowScreen);