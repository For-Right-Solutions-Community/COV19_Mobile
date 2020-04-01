import React, { Component } from "react";

import { Animated, Dimensions, Keyboard, StyleSheet, Button,TouchableWithoutFeedback, UIManager,TextInput } from 'react-native';
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
import * as Animatable from 'react-native-animatable';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const llll=' من يقوم بتعمير هذه الاستمارة ؟'
const br = `\n`;
const nbreecran=28;
var radio_props = [
    {label: '   ذكر     ', value: 0 },
    {label: '  انثى     ', value: 1 }
  ];
  var radio_propsetatcivil = [
    {label: ' اعزب/عزباء ', value: 0 },
    {label: ' متزوج ', value: 1 },
    {label: ' ارمل ', value: 2 }
  ];
  var radio_propsdiabitic = [
    {label: ' العينين', value: 0 },
    {label: ' القلب ', value: 1 },
    {label: ' الكلى ', value: 2 },
    {label: ' الاعصاب ', value: 3 },
    {label: ' الاطراف ', value: 4 },
    {label: ' لاشيء ', value: 5 }
  ];
  var radio_propsLiving = [
    {label: '      لا   ', value: 0 },
    {label: '    نعم    ', value: 1 }
  ];
  const { State: TextInputState } = TextInput;
export default class Editpatient extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            shift: new Animated.Value(0),
            firstname:'',
            lastname:'',
            tel:'',
            telfamille:'',
            age:'',
            statuspaysvoyage:"",
            statusville:"",
            statusnbrejours:"",
            statusdugreefievre:"",
            current: 0,
            isLast:false,
              istoux:"",
              isgorge:"",
              isfievre:"",
              isdiarrhe:"",
              isvoyage:"",
              iscontact:"",
              statustoux:"empty",
              statusgorge:"empty",
              statusfievre:"empty",
              statusdiarrhe:"empty",
              statusvoyage:"empty",
              statuscontact:"empty",
              onColor:"#96C85B",
              statususerfillform:"empty",
              statusWhyuserfillform:"empty",
              statustestanalys:"empty",
              statusresultatanalys:"empty",
              statuszonecritique:"empty",
              statusASPHYXIE:"empty",
              statusABILYTY:"empty",
              statusWhyABILYTY:"empty",
              statusABILYTY_DURATION:"empty",
              statusSYMTOME:"empty",
              statussenseofsmell:"empty",
              statusASPHEXIE:"empty",
              statusANTECEDENT:"empty",
              statusDIABETE:"empty",
              statushypertension:"empty",
              statuscoeur:"empty",
              statusRenal:"empty",
              statushindering:"empty",
              statusconcer:"empty",
              statusplaceconcer:"empty",
              statusgender:-1,
              statusetatcivil:-1,
              statusetatdiabitic:-1,
              statusLiving:-1,
              statusnbreanneediabitic:-1,
              statustreatmentconcer:-1,
              statusImmunity:-1
              

              
              


        });
      
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
          const fieldHeight = height;
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
    _onPressuserfillform(statususerfillform){
        const currentStatus = statususerfillform;
        this.setState({ statususerfillform: currentStatus});
    
        if(currentStatus==="yes")
        {
            this.setState({ statusWhyuserfillform: "empty"});
            this.refs.viewoui.tada(800);
          
        }
           
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressWhyuserfillform(statusWhyuserfillform){
        const currentStatus = statusWhyuserfillform;
        this.setState({ statusWhyuserfillform: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewooui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnnon.tada(800);
    }
    _onPresstestanalys(statustestanalys){
        const currentStatus = statustestanalys;
        this.setState({ statustestanalys: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewoui.tada(800);
            if(currentStatus==="no")
            {
                this.setState({ statusresultatanalys: "empty"});
                this.refs.viewnon.tada(800)
              
            }
        ;
    }
    _onPressresultatanalys(statusresultatanalys){
        const currentStatus = statusresultatanalys;
        this.setState({ statusresultatanalys: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewooui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnnon.tada(800);
    }

    _onPressstatuszonecritique(statuszonecritique){
        const currentStatus = statuszonecritique;
        this.setState({ statuszonecritique: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPresstoux(statustoux){
        const currentStatus = statustoux;
        this.setState({ statustoux: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }

    _onPressASPHYXIE(statusASPHYXIE){
        const currentStatus = statusASPHYXIE;
        this.setState({ statusASPHYXIE: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressABILYTY(statusABILYTY){
        const currentStatus = statusABILYTY;
        this.setState({ statusABILYTY: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressABILYTY_DURATION(statusABILYTY_DURATION){
        const currentStatus = statusABILYTY_DURATION;
        this.setState({ statusABILYTY_DURATION: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
        else if(currentStatus==="4")
        this.refs.view4.tada(800);
    }
    _onPressSYMTOME(statusSYMTOME){
        const currentStatus = statusSYMTOME;
        this.setState({ statusSYMTOME: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
        else if(currentStatus==="4")
        this.refs.view4.tada(800);
        else if(currentStatus==="5")
        this.refs.view5.tada(800);
        else if(currentStatus==="6")
        this.refs.view6.tada(800);
        else if(currentStatus==="7")
        this.refs.view7.tada(800);
    }
    _onPresssenseofsmell(statussenseofsmell){
        const currentStatus = statussenseofsmell;
        this.setState({ statussenseofsmell: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressASPHEXIE(statusASPHEXIE){
        const currentStatus = statusASPHEXIE;
        this.setState({ statusASPHEXIE: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressANTECEDENT(statusANTECEDENT){
        const currentStatus = statusANTECEDENT;
        this.setState({ statusANTECEDENT: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressDIABETE(statusDIABETE){
        const currentStatus = statusDIABETE;
        this.setState({ statusDIABETE: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPresshypertension(statushypertension){
        const currentStatus = statushypertension;
        this.setState({ statushypertension: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPresscoeur(statuscoeur){
        const currentStatus = statuscoeur;
        this.setState({ statuscoeur: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressRenal(statusRenal){
        const currentStatus = statusRenal;
        this.setState({ statusRenal: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPresshindering(statushindering){
        const currentStatus = statushindering;
        this.setState({ statushindering: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressconcer(statusconcer){
        const currentStatus = statusconcer;
        this.setState({ statusconcer: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressplaceconcer(statusplaceconcer){
        const currentStatus = statusplaceconcer;
        this.setState({ statusplaceconcer: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
    }
    _onPressImmunity(statusImmunity){
        const currentStatus = statusImmunity;
        this.setState({ statusImmunity: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);

    }
    _onPresstreatmentconcer(statustreatmentconcer){
        const currentStatus = statustreatmentconcer;
        this.setState({ statustreatmentconcer: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
    }
    _onPressfievre(statusfievre){
        const currentStatus = statusfievre;
        this.setState({ statusfievre: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);

    }
    _onPressdiarrhe(statusdiarrhe){
        const currentStatus = statusdiarrhe;
        this.setState({ statusdiarrhe: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressvoyage(statusvoyage){
        const currentStatus =statusvoyage ;
        this.setState({ statusvoyage: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPresscontact(statuscontact){
        const currentStatus =statuscontact ;
        this.setState({ statuscontact: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressWhyABILYTY(statusWhyABILYTY){
        const currentStatus = statusWhyABILYTY;
        this.setState({ statusWhyABILYTY: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
        else if(currentStatus==="4")
        this.refs.view4.tada(800);
    }
    _addpatient()
    {
        console.log('end');

    }
    _onPrev(value)
    {
        let index=this.state.current-value;
        if(index==nbreecran)
        {
            this.setState({
                isLast:true
            }); 
        }
        else
        {
            this.setState({
                isLast:false
            }); 
        }
        this.setState({
            current:index
        });
    }
    _onNext(value)
    {
        let index=this.state.current+value;
        if(index==nbreecran)
        {
            this.setState({
                isLast:true
            }); 
        }
        else
        {
            this.setState({
                isLast:false
            }); 
        }
        this.setState({
            current:index
        });
        
    }


  render() {
      if (this.state.current === 0) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
                <View style={{ flex: 1}}>
                <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
                 </View> 
                 <View style={{ flex: 10}}>
                 <Text style={styles.textlabel}> الاسم :</Text> 
                  
            <TextInput
              placeholder="الاسم"
              style={styles.textInput}
              value={this.state.firstname} onChangeText={ (text) => this.setState({ firstname: text }) }
            />
              <Text style={styles.textlabel}> </Text> 
              <Text style={styles.textlabel}> اللقب :</Text> 
            <TextInput
              placeholder="اللقب"
              style={styles.textInput}
              value={this.state.lastname} onChangeText={ (text) => this.setState({ lastname: text }) }
            />
              <Text style={styles.textlabel}> </Text> 
             <Text style={styles.textlabel}> العمر :</Text> 
            <TextInput
              placeholder="العمر"
              style={styles.textInput} value={this.state.age} onChangeText={ (text) => this.setState({ age: text }) }
            />
     <Text style={styles.textlabel}> </Text> 
                  <View>
                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                        >
                        {/* To create radio buttons, loop through your array of options */}
                        {
                            radio_props.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.statusgender === i}
                                onPress={(value) => {this.setState({statusgender:value})}}
                                borderWidth={1}
                                buttonInnerColor={'#96C85B'}
                                buttonOuterColor={this.state.statusgender === i ? '#96C85B' : '#000'}
                                buttonSize={40}
                                buttonOuterSize={60}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 20}}
                                />
                                <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={(value) => {this.setState({statusgender:value})}}
                                labelStyle={{fontSize: 20, color: 'black'}}
                                labelWrapStyle={{}}
                                />
                    </RadioButton>
                    ))
                }  
                </RadioForm>
                </View>
                <View style={{ flex: 3}}>
                <View style={styles.buttonContainer}>
                {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
               </View>
               </View>
          </Animated.View>
      
          
        );
    }
    if (this.state.current === 1) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
                <View style={{ flex: 1}}>
                <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
                 </View>  
                <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> رقم الهاتف الشخصي :</Text> 
                <Text style={styles.textlabel}> </Text> 
                <TextInput
                    placeholder="الهاتف"
                    style={styles.textInput}
                    value={this.state.tel} onChangeText={ (text) => this.setState({ tel: text }) }
                    />

                   <Text style={styles.textlabel}> رقم هاتف احد الاقارب (في حالة عدم التحصل عليك) :</Text> 
                   <Text style={styles.textlabel}> </Text> 
                   <TextInput
                    placeholder="هاتف احد الاقارب"
                    style={styles.textInput}
                    value={this.state.telfamille} onChangeText={ (text) => this.setState({ telfamille: text }) }
                    />

                  <Text style={styles.textlabel}> </Text> 
              
       
                  <View>
                     <RadioForm
                        formHorizontal={false}
                        animation={true}
                        >
                        {/* To create radio buttons, loop through your array of options */}
                        {
                            radio_propsetatcivil.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.statusetatcivil === i}
                                onPress={(value) => {this.setState({statusetatcivil:value})}}
                                borderWidth={1}
                                buttonInnerColor={'#96C85B'}
                                buttonOuterColor={this.state.statusetatcivil === i ? '#96C85B' : '#000'}
                                buttonSize={40}
                                buttonOuterSize={60}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 120}}
                                />
                                <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={(value) => {this.setState({statusetatcivil:value})}}
                                labelStyle={{fontSize: 20, color: 'black'}}
                                labelWrapStyle={{}}
                                />
                    </RadioButton>
                    ))
                }  
                </RadioForm>
                </View>


                </View> 
                <View style={{ flex: 3}}> 
                <View style={styles.buttonContainer}>
                {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
                </View>   
                </View> 
         </Animated.View>
          
        );
    }
    else if (this.state.current === 2) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>  من يقوم بتعمير هذه الاستمارة ؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressuserfillform("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statususerfillform ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>المريض </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressuserfillform("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statususerfillform ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>شخص اخر</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
 
            {this.state.statususerfillform==="no" ? (
              <View style={{ flex: 10}}>
                <Text style={styles.textlabel}></Text> 
              <Text style={styles.textlabel}>لماذا ؟ {br} </Text> 
              <TouchableWithoutFeedback onPress={() => this._onPressWhyuserfillform("yes")}>
              <Animatable.View ref="viewooui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyuserfillform ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
              <Text style={{color:"white", fontWeight: "bold"}}>لا يعرف التعامل مع التطبيقة</Text>
              </Animatable.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._onPressWhyuserfillform("no")}>
              <Animatable.View ref="viewnnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyuserfillform ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
              <Text style={{color:  "white" , fontWeight: "bold"}}>حالته الصحية لا تسمح : فقدان وعي/ضيق تنفس حاد</Text>
              </Animatable.View>
          </TouchableWithoutFeedback>
 
          </View>  
      ) : (
        <View/>
      )}
   
           
                </View>




            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>
        );
    }

    else if (this.state.current === 3) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>  هل سافرت خارج البلاد خلال الشهر الفارط ؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressvoyage("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusvoyage ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>نعم </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressvoyage("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusvoyage ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>


          {this.state.statusvoyage==="yes" ? (
              <View style={{ flex: 10}}>
                 <Text style={styles.textlabel}></Text> 
               <Text style={styles.textlabel}>  الى اي بلد؟ {br} {br}</Text> 
               <TextInput
                    placeholder="البلاد "
                    style={styles.textInput}
                    value={this.state.statuspaysvoyage} onChangeText={ (text) => this.setState({ statuspaysvoyage: text }) }
                    />
          </View>  
      ) : (
        <View/>
      )}

            
   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>
            </Animated.View>
        );
    }
    else if (this.state.current === 4) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>هل كان لك اتصال مباشر بشخص سافر خارج البلاد الشهر الفارط ؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresscontact("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontact==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresscontact("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontact ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

          
            {this.state.statuscontact==="yes" ? (
              <View style={{ flex: 10}}>
                 <Text style={styles.textlabel}></Text> 
                 <Text style={styles.textlabel}>  هل يسكن معك في نفس المنزل ؟ {br} {br}</Text> 
                 <View>
                     <RadioForm
                        formHorizontal={true}
                        animation={true}
                        >
                        {/* To create radio buttons, loop through your array of options */}
                        {
                            radio_propsLiving.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.statusLiving === i}
                                onPress={(value) => {this.setState({statusLiving:value})}}
                                borderWidth={1}
                                buttonInnerColor={'#96C85B'}
                                buttonOuterColor={this.state.statusLiving === i ? '#96C85B' : '#000'}
                                buttonSize={40}
                                buttonOuterSize={60}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 20}}
                                />
                                <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={(value) => {this.setState({statusLiving:value})}}
                                labelStyle={{fontSize: 20, color: 'black'}}
                                labelWrapStyle={{}}
                                />
                    </RadioButton>
                    ))
                }  
                </RadioForm>
                </View>
          </View>  
      ) : (
        <View/>
      )}
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>

            </Animated.View>
        );
    }
    else if (this.state.current === 5) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>هل خضعت انت او الشخص المذكور لتحليل الاصابة بفيروس كورونا ؟ {br} {br}</Text> 
  
                <TouchableWithoutFeedback onPress={() => this._onPresstestanalys("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalys ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresstestanalys("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalys ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

   
            </View>  
            <View style={{ flex: 3}}> 
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statustestanalys ==="yes"?1:2)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>
        );
    }
    else if (this.state.current === 6) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}></Text> 
              <Text style={styles.textlabel}>ماهي نتيجة التحليل ؟ {br} {br}</Text> 
              <TouchableWithoutFeedback onPress={() => this._onPressresultatanalys("yes")}>
              <Animatable.View ref="viewooui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalys ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
              <Text style={{color:"white", fontWeight: "bold"}}>مصاب</Text>
              </Animatable.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._onPressresultatanalys("no")}>
              <Animatable.View ref="viewnnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalys ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
              <Text style={{color:  "white" , fontWeight: "bold"}}>غير مصاب</Text>
              </Animatable.View>
          </TouchableWithoutFeedback>
   
            </View> 
            <View style={{ flex: 3}}>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>
        );
    }
    else  if (this.state.current === 7) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>هل كنت في احدى المناطق التي اعلنت عنها وزارة الصحة كبؤرة لانتشار المرض خلال الاسبوعين الفارطين؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressstatuszonecritique("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuszonecritique ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressstatuszonecritique("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuszonecritique ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   

            </View> 
            <View style={{ flex: 3}}> 
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statustestanalys ==="yes"?1:2)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statuszonecritique ==="yes"?1:2)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View> 
            </Animated.View>
        );
        
    }
    else  if (this.state.current === 8) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
                <View style={{ flex: 1}}>
                <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
                </View>  
             <View style={{ flex: 10}}>


             <View> 

          
                <Text style={styles.textlabel}>  حدد المنطقة {br} {br}</Text> 
      
                <TextInput
                    placeholder="المنطقة "
                    style={styles.textInput}
                    value={this.state.statusville} onChangeText={ (text) => this.setState({ statusville: text }) }
                    />
            <Text style={styles.textlabel}>  متى قمت بزيارتها عدد الأيام  {br} {br}</Text> 
            <TextInput
                    placeholder="عدد الأيام "
                    style={styles.textInput}
                    value={this.state.statusnbrejours} onChangeText={ (text) => this.setState({ statusnbrejours: text }) }
                    />
 
          </View>  
    
          <View style={{ flex: 3}}>
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View> 
            </View> 
            </Animated.View>
        );
        
    }
    else  if (this.state.current === 9) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
                <View style={styles.container}>
                            <View style={{ flex: 1}}>
                            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
                            </View>  
                        <View style={{ flex: 10}}>
                                <Text style={styles.textlabel}>هل تشكو من ارتفاع في درجة حرارتك ؟  {br} {br}</Text> 
                                <TouchableWithoutFeedback onPress={() => this._onPressfievre("yes")}>
                                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusfievre ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                                <Text style={{color:"white" , fontWeight: "bold"}}>نعم</Text>
                                </Animatable.View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => this._onPressfievre("no")}>
                                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusfievre ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                                <Text style={{color:"white" , fontWeight: "bold"}}>لا</Text>
                                </Animatable.View>
                            </TouchableWithoutFeedback>
                            {this.state.statusfievre==="yes" ? (
                            <View style={{ flex: 10}}>
                                <Text style={styles.textlabel}></Text> 
                                <Text style={styles.textlabel}> ما هي درجة حرارتك {br} {br}</Text> 
                                <TextInput
                                    placeholder="درجة حرارتك "
                                    style={styles.textInput}
                                    value={this.state.statusdugreefievre} onChangeText={ (text) => this.setState({ statusdugreefievre: text }) }
                                    />
                            </View>  
                            ) : (
                                <View/>
                            )}
            
                        </View>  
                        <View style={{ flex: 3}}>
                    <View style={styles.buttonContainer}>
                    {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statuszonecritique ==="yes"?1:2)} /> : null}
                    
                        {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
                    </View>
                    </View>
                </View>  
            </Animated.View>
        );
    }
    else  if (this.state.current === 10) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 5}}>
                <Text style={styles.textlabel}> هل لديك سعال او ان درجة السعال التي تشكو منها في العادة ازدادت حدة ؟  {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresstoux("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustoux ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresstoux("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustoux ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>لا</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View> 
        );
    }
    else  if (this.state.current === 11) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 8}}>
                <Text style={styles.textlabel}> هل تشكو من عدم القدرة على الحديث كما في السابق هل تشكو من ضيق تنفس او تعكر في قدرتك على التنفس مقارنة بالسابق ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressASPHYXIE("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusASPHYXIE ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressASPHYXIE("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusASPHYXIE ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white", fontWeight: "bold"}}>لا</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View> 
            <View style={{ flex: 3}}>
           
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statusASPHYXIE==="yes"?1:2)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View> 
        );
    }
    else  if (this.state.current === 12 )  {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> لماذا ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>احس بضيق في التنفس</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>صداع شديد يمنعني من الحديث</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>احس بتعب شديد</Text>
                </Animatable.View>
                </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("4")}>
                <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY ==="4" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>اخر</Text>
                </Animatable.View>
                </TouchableWithoutFeedback>
   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View>
        );
    }
    else if (this.state.current === 13) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>هل تستطيع الحركة و القيام بحاجياتك دون مساعدة ؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressABILYTY("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressABILYTY("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>لا</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statusASPHYXIE==="yes"?1:2)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statusABILYTY==="no"?1:2)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
            </View>
        );
    }
    else  if (this.state.current === 14 )  {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>منذ متى ؟ {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>ايام  </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>اسابيع </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>اشهر   </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("4")}>
                <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="4" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>سنوات </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View> 
            </View>
        );
    }
    else  if (this.state.current === 15) {
        return (
            <View style={styles.container}>
    
        <View style={{ flex: 10}}>
                <Text style={styles.textlabel}>هل تشكو من احد هذه الاعراض ؟  {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>اسهال</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="2"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>تقيؤ</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="3"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>اوجاع في الصدر</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("4")}>
                <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="4"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>اوجاع اعلى البطن</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

                   <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("5")}>
                <Animatable.View ref="view5" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="5"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}> الم حاد في الحنجرة</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("6")}>
                <Animatable.View ref="view6" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="6"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>اوجاع في المفاصل و العضلات </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("7")}>
                <Animatable.View ref="view7" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME ==="7"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>لا اشكو من هذه الاعراض </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
          
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statusABILYTY==="no"?1:2)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View>  
        );
    }
    else  if (this.state.current === 16) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تشكو من تدهور قدرتك على الشم او التذوق ؟  {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresssenseofsmell("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statussenseofsmell ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresssenseofsmell("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statussenseofsmell ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>لا</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View> 
        );
    }
    else  if (this.state.current === 17) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تشكو من عدم القدرة على الحديث كما في السابق هل تشكو من ضيق تنفس او تعكر في قدرتك على التنفس مقارنة بالسابق ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressASPHEXIE("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusASPHEXIE ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressASPHEXIE("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusASPHEXIE ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white", fontWeight: "bold"}}>لا</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View> 
           
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
          
            </View>  
            </View> 
            </View> 
        );
    }
    else  if (this.state.current === 18) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تتابع من اجل احد هذه الامراض ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressANTECEDENT("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusANTECEDENT ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>ضيق تنفس مزمن : ربو</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressANTECEDENT("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusANTECEDENT ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> مرض الانسداد الرئوي المزمن </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this._onPressANTECEDENT("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusANTECEDENT ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>أجريت عملية على الصدر او القلب</Text>
                </Animatable.View>
                </TouchableWithoutFeedback>

   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View> 
        );
    }
    else  if (this.state.current === 19) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
					<View style={styles.container}>
								<View style={{ flex: 1}}>
								<Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
								</View>  
							 <View style={{ flex: 10}}>
								<Text style={styles.textlabel}> هل تعاني من مرض السكري ؟   {br} {br}</Text> 
								<TouchableWithoutFeedback onPress={() => this._onPressDIABETE("yes")}>
								<Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusDIABETE ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
								<Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
								</Animatable.View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => this._onPressDIABETE("no")}>
								<Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusDIABETE ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
								<Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
								</Animatable.View>
							</TouchableWithoutFeedback>

											{this.state.statusDIABETE==="yes" ? (
											<View style={{ flex: 10}}>
													<Text style={styles.textlabel}></Text> 
												<Text style={styles.textlabel}>عدد سنوات الاصابة بالمرض  {br} {br}</Text> 
												<TextInput
														placeholder="عدد سنوات "
                                                        style={styles.textInput}
                                                        value={this.state.statusnbreanneediabitic} onChangeText={ (text) => this.setState({ statusnbreanneediabitic: text }) }
														/>
											</View>  
									) : (
										<View/>
									)}
							</View>  
                            <View style={{ flex: 3}}>
							<View style={styles.buttonContainer}>
							{this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
							  
								{!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statusDIABETE==="yes"?1:2)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
							</View>
                            </View>
					</View>
            </Animated.View>  
        );
    }

    else  if (this.state.current === 20) {
        const { shift } = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> ماهي مخلفات السكري لديك ؟   {br} {br}</Text> 

                   <View>
                    <RadioForm
                        formHorizontal={false}
                        animation={true}
                        >
                        {/* To create radio buttons, loop through your array of options */}
                        {
                            radio_propsdiabitic.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.statusetatdiabitic === i}
                                onPress={(value) => {this.setState({statusetatdiabitic:value})}}
                                borderWidth={1}
                                buttonInnerColor={'#96C85B'}
                                buttonOuterColor={this.state.statusetatdiabitic === i ? '#96C85B' : '#000'}
                                buttonSize={40}
                                buttonOuterSize={60}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 120}}
                                />
                                <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={(value) => {this.setState({statusetatdiabitic:value})}}
                                labelStyle={{fontSize: 20, color: 'black'}}
                                labelWrapStyle={{}}
                                />
                    </RadioButton>
                    ))
                }  
                </RadioForm>
                </View>

   
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View>   
            </Animated.View>
        );
    }
    else  if (this.state.current === 21) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تعاني من ضغط الدم ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresshypertension("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statushypertension ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresshypertension("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statushypertension ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

             {this.state.statushypertensiont==="yes" ? (
              <View style={{ flex: 10}}>
                 <Text style={styles.textlabel}></Text> 
               <Text style={styles.textlabel}>عدد سنوات الاصابة بالمرض  {br} {br}</Text> 
               <Item stackedLabel  >
                    <Input style={styles.selectedText}  value={this.state.tel} onChangeText={ (text) => this.setState({ tel: text }) }/>
                  </Item>
          </View>  
      ) : (
        <View/>
      )}
            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statusDIABETE==="yes"?1:2)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View>  
        );
    }
    else  if (this.state.current === 22) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تعاني من امراض القلب: قصور في القلب/انسداد اوعية القلب ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresscoeur("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscoeur ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresscoeur("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscoeur ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View> 
            </View>   
        );
    }
    else  if (this.state.current === 23) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تعاني من امراض الكلى: قصور كلوي /تصفية الدم ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressRenal("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusRenal ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressRenal("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusRenal ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View>  
        );
    }
    else  if (this.state.current === 24) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تشكو من إعاقة ذهنية او جسدية ؟   {br} {br}</Text>  
                <TouchableWithoutFeedback onPress={() => this._onPresshindering("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statushindering ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresshindering("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statushindering ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>




            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View>  
        );
    }
    else  if (this.state.current === 25) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل أصبت بمرض السرطان أو تتابع علاجا بشأنه ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressconcer("yes")}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusconcer ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressconcer("no")}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusconcer ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>

            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(this.state.statusconcer ==="yes"?1:3)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View>  
        );
    }

    else  if (this.state.current === 26) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> أين يقع مرض السرطان لديك  ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressplaceconcer("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusplaceconcer ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>الرئة</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressplaceconcer("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusplaceconcer ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> الكبد </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressplaceconcer("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusplaceconcer ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}> الحلق و الانف و الاذنين </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>



            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View> 
        );
    }

    else  if (this.state.current === 27) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> ماهو العلاج المعتمد في مرض السرطان  ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>كيميائي</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> اشعة </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("3")}>
                <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}> جراحة </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>



            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(1)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>   
            </View> 
        );
    }
    else  if (this.state.current === 28) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
             <View style={{ flex: 10}}>
                <Text style={styles.textlabel}> هل تعاني من أحد أمراض ضعف المناعة  ؟   {br} {br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressImmunity("1")}>
                <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusImmunity ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>نعم</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressImmunity("2")}>
                <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusImmunity ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}> لا </Text>
                </Animatable.View>
            </TouchableWithoutFeedback>




            </View>  
            <View style={{ flex: 3}}>
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev(this.state.statusconcer ==="yes"?1:3)} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext(1)} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
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
    buttonContainer: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
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
      pageText:
      {
          fontSize: 26,
          fontWeight:"bold",
      },
      textoption: {
        fontSize: 14,
        color:"gray",
        left:10,
      
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
      },
      textInput: {
        backgroundColor: '#DCDCDC',
        height: 50,
        paddingRight:30,
        fontSize: 22,
        color:"#3f51b5",
        fontWeight:"bold"
      },
      container: {
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
      }
});