import React from "react";
import { KeyboardAvoidingView,ProgressBarAndroid,AsyncStorage,Animated, Dimensions, Keyboard,UIManager,StyleSheet,TouchableHighlight,TextInput,CheckBox,Alert} from "react-native";
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
import { _Signup,_subscribeuser,_createUser} from './Store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const br = `\n`;
var STORAGE_KEY = 'id_token'
const { State: TextInputState } = TextInput;
 class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      shift: new Animated.Value(0),
        email:'',
        password:'',
        password1:'',
        hidepassword:false,
        codevalidation:'',
        indeterminate:false
        
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

_subscribeuser()
{
  if(this.state.password===this.state.password1)
  {
    this.setState({indeterminate: true});

    this.props._subscribeuser(this.state.email,this.state.password).then(() => {
      this.setState({indeterminate: false});
    });
  }
  else{
    Alert.alert(
      '',
      'كلمات المرور ليست هي نفسها',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }



  
}
_createUser()
{
  this.setState({indeterminate: true});
  this.props._createUser(this.state.email,this.state.password,this.state.codevalidation).then(() => {
    AsyncStorage.getItem('userToken')
    .then((data) => {
      this.props.navigation.navigate("IndexFollowScreen");
      this.setState({indeterminate: false});
    });
  });

}


  render() {
    const { shift } = this.state;
    console.log(this.props.subscribe)
   if(this.props.subscribe=="default"|| this.props.subscribe==undefined||this.props.subscribe==null ||this.props.subscribe==false)
   {
      return (
        <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <KeyboardAvoidingView enabled>
         <View style={{ marginTop: 30}}>
          <Text style={styles.textlabel}> البريد الإلكتروني : </Text> 
                    
                    <TextInput
                       placeholder="البريد الإلكتروني"
                      style={styles.textInput}
                      autoCapitalize = 'none'
                      value={this.state.email} onChangeText={ (text) => this.setState({ email: text }) }
                    />
                      <Text style={styles.textlabel}> </Text> 
                      <Text style={styles.textlabel}> كلمة المرور :  </Text> 
                    <TextInput
                      placeholder="كلمة المرور" secureTextEntry={!this.state.hidepassword}
                      style={styles.textInput}
                      autoCapitalize = 'none'
                      value={this.state.password} onChangeText={ (text) => this.setState({ password: text }) }
                    />
                         <Text style={styles.textlabel}> </Text> 
                         <Text style={styles.textlabel}> تأكيد كلمة المرور :  </Text> 
                      <TextInput
                      placeholder="تأكيد كلمة المرور" secureTextEntry={!this.state.hidepassword}
                      style={styles.textInput}
                      autoCapitalize = 'none'
                      value={this.state.password1} onChangeText={ (text) => this.setState({ password1: text }) }
                    />
                  <Text style={styles.textlabel}> </Text> 
                  
                  <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.hidepassword}
                    onValueChange={() => this._affichePassWord()}
                  />
                  <Text style={{marginTop: 5}}> إظهار كلمة المرور </Text>
                </View>
         <Text style={styles.textlabel}> </Text> 
          </View>
          <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={() => this._subscribeuser()} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>تسجيل </Text>
            </TouchableHighlight>
            {this.state.indeterminate ? (
          <View style={styles.container}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={this.state.indeterminate}
            progress={0.0}
          />
          </View>
              ) : (
                  <View/>
              )}

          </View>
  
          </KeyboardAvoidingView >
        </Animated.View>
      );
     
    }
    else
    {
      return (
        <View style={{ marginTop: 30}}>
      <Text style={styles.title}>تم إرسال رسالة على بريدك الالكتروني تحتوي على رقم الدخول</Text>
      <Text style={styles.textlabel}> </Text> 
                         <Text style={styles.textlabel}> رقم الدخول : {"\n"} </Text> 
                      <TextInput
                      placeholder="رقم الدخول"
                      style={styles.textInput}
                      value={this.state.codevalidation} onChangeText={ (text) => this.setState({ codevalidation: text }) }
                    />

                             <View style={styles.row}>
                             <Text style={styles.textlabel}>  </Text> 
          <TouchableHighlight style={styles.button} onPress={() => this._createUser()} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>دخول </Text>
            </TouchableHighlight>
            {this.state.indeterminate ? (
          <View style={styles.container}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={this.state.indeterminate}
            progress={0.0}
          />
          </View>
              ) : (
                  <View/>
              )}
     
          </View>
      </View>
      );
    }
 
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _Signup: _Signup,
    _subscribeuser:_subscribeuser,
    _createUser:_createUser
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    token: state.token,
    subscribe: state.token.subscribe,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Inscription);