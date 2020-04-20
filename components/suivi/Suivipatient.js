import React, { Component } from "react";

import { KeyboardAvoidingView,Animated, Dimensions, Keyboard, StyleSheet, Button,TouchableWithoutFeedback, UIManager,TextInput ,TouchableOpacity,ScrollView,TouchableHighlight} from 'react-native';
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
import * as Animatable from 'react-native-animatable';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ProgressBar, Colors } from 'react-native-paper';
import { _createsymtome,_updatepatient } from "../../Store/actions";
const llll=' من يقوم بتعمير هذه الاستمارة ؟'
const br = `\n`;
var malade="";
var masculin="";
const nbreecran=16;
var radio_props = [
    {label: '   ذكر     ', value: 0 },
    {label: '  أنثى     ', value: 1 }
  ];
  var radio_propsetatcivil = [
    {label: ' أعزب/عزباء ', value: 0 },
    {label: ' متزوج ', value: 1 },
    {label: ' أرمل ', value: 2 }
  ];
  var radio_propsdiabitic = [
    {label: ' العينين', value: 0 },
    {label: ' القلب ', value: 1 },
    {label: ' الكلى ', value: 2 },
    {label: ' الأعصاب ', value: 3 },
    {label: ' الأطراف ', value: 4 },
    {label: ' لاشيء ', value: 5 }
  ];
  var radio_propsLiving = [
    {label: '      لا   ', value: 0 },
    {label: '    نعم    ', value: 1 }
  ];
  const { State: TextInputState } = TextInput;

export default class Suivipatient extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            shift: new Animated.Value(0),
            validitynext:false,
            firstname:"",
            lastname:"",
            tel:"",
            telfamille:'',
            age:"",
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
              statustestanalysvoyag:"empty",
              statusresultatanalysvoyag:"empty",
              statuscontactmalade:"empty",
              statusentourage:"empty",
              statusnbepersentourage:"",
              statusLivingentourage:"empty",
              statuszonecritique:"empty",
              statusASPHYXIE:"empty",
              statusABILYTY:"empty",
              statusWhyABILYTY:[],
              statusABILYTY_DURATION:"empty",
              statusSYMTOME:[],
              statussenseofsmell:"empty",
              statusASPHEXIE:"empty",
              statusPARLE:"empty",
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
              statusnbreanneehypertension:-1,
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
            this.refs.view1.tada(800);
        else if(currentStatus==="no")
        this.refs.view2.tada(800);
    }

    _onPresstestanalysvoyag(statustestanalysvoyag){
        const currentStatus = statustestanalysvoyag;
        this.setState({ statustestanalysvoyag: currentStatus});
        if(currentStatus==="yes")
            this.refs.viewoui.tada(800);
            if(currentStatus==="no")
            {
                this.setState({ statusresultatanalys: "empty"});
                this.refs.viewnon.tada(800)
              
            }
        ;
    }
    _onPressresultatanalysvoyag(statusresultatanalysvoyag){
        const currentStatus = statusresultatanalysvoyag;
        this.setState({ statusresultatanalysvoyag: currentStatus});
        if(currentStatus==="yes")
            this.refs.view1.tada(800);
        else if(currentStatus==="no")
        {
            this.setState({ statusville: '',statusnbrejours:''});
            this.refs.view2.tada(800);
        }
 
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
        const SYMTOMEIndex = this.state.statusSYMTOME.findIndex(item => item === currentStatus)
        if (SYMTOMEIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
  
          this.setState({ statusSYMTOME: this.state.statusSYMTOME.filter( (item, index) => index !== SYMTOMEIndex)});
   
        }
        else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          this.setState({ statusSYMTOME: [...this.state.statusSYMTOME, currentStatus]});
  
          }

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
    _onPressPARLE(statusPARLE){
        const currentStatus = statusPARLE;
        this.setState({ statusPARLE: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressANTECEDENT(statusANTECEDENT){
        const currentStatus = statusANTECEDENT;
        this.setState({ statusANTECEDENT: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
        else if(currentStatus==="4")
        this.refs.view4.tada(800);
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
        else if(currentStatus==="4")
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
        {
            this.setState({ statuspaysvoyage: ""});
            this.refs.viewnon.tada(800);
        }
       
    }
    _onPresscontact(statuscontact){
        const currentStatus =statuscontact ;
        this.setState({ statuscontact: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        {
            this.setState({ statusLiving: -1});
            this.refs.viewnon.tada(800);
        }
        
    }

    _onPresscontactmalade(statuscontactmalade){
        const currentStatus =statuscontactmalade ;
        this.setState({ statuscontactmalade: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }

    _onPressentourage(statusentourage){
        const currentStatus =statusentourage ;
        this.setState({ statusentourage: currentStatus});
        if(currentStatus==="yes")
        this.refs.viewoui.tada(800);
        else if(currentStatus==="no")
        this.refs.viewnon.tada(800);
    }
    _onPressLivingentourage(statusLivingentourage){
        const currentStatus = statusLivingentourage;
        this.setState({ statusLivingentourage: currentStatus});
        if(currentStatus==="1")
        this.refs.view1.tada(800);
        else if(currentStatus==="2")
        this.refs.view2.tada(800);
        else if(currentStatus==="3")
        this.refs.view3.tada(800);
    }

    _onPressWhyABILYTY(statusWhyABILYTY){
        const currentStatus = statusWhyABILYTY;
        const SYMTOMEIndex = this.state.statusWhyABILYTY.findIndex(item => item === currentStatus)
        if (SYMTOMEIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
  
          this.setState({ statusWhyABILYTY: this.state.statusWhyABILYTY.filter( (item, index) => index !== SYMTOMEIndex)});
   
        }
        else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          this.setState({ statusWhyABILYTY: [...this.state.statusWhyABILYTY, currentStatus]});
  
          }

          if(currentStatus==="1")
          this.refs.view1.tada(800);
          else if(currentStatus==="2")
          this.refs.view2.tada(800);
          else if(currentStatus==="3")
          this.refs.view3.tada(800);
          else if(currentStatus==="4")
          this.refs.view4.tada(800);

          
        }
    _addsymtome()
    {
        console.log('end');
        let exposure=this._fillexposure();
        let patient=this.props.navigation.state.params.patient;
        patient.exposure=exposure;
        let symtome=this._fillSymtome();
        _updatepatient(patient).then((resultat)=>{
           _createsymtome(symtome).then((resultat)=>{

            this.props.navigation.navigate("IndexFollowScreen")
        });

        });

        this.props.navigation.goBack();
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

   _fillexposure()
    {
        exposure={
         //exposure
             traveler:this.state.statusvoyage=="yes"?true:false,
             contactWithTraveler:this.state.statuscontact=="yes"?true:false,
            sameHomePersonReturningFromTrip: this.state.statusLiving=="1"?true:false,
             travellerhasmakingtest:this.state.statustestanalysvoyag=="yes"?true:false,
            contactedTravellerTestResult :this.statetatusresultatanalysvoyag=="yes"?true:false,
            hasmakingtest:this.state.statustestanalys=="yes"?true:false,
            testResult:this.state.statusresultatanalys=="yes"?true:false,
            visitRegion:this.state.statuszonecritique=="yes"?true:false,
            contactWithInfectedPerson:this.state.statuscontactmalade=="yes"?true:false,
            withSuspiciousGroup:this.state.statuszonecritique=="yes"?true:false,
        }
        return exposure;
    }
    _fillSymtome()
    {
        let symtome={
            patient:{"id":this.props.navigation.state.params.patient.id},
          

            severeDyspnea:this.state.statusWhyuserfillform=="yes"?true:false,

         
            date:new Date(),
            
            fever:this.state.statusfievre=="yes"?true:false,
            temperature:this.state.statusdugreefievre,
            cough:this.state.statustoux=="yes"?true:false,
            dyspnea:this.state.statusASPHYXIE=="yes"?true:false,
            unableToSpeak:this.state.statusPARLE=="yes"?true:false,

            severeDyspnea:this.state.WhyABILYTY=="1"?true:false ,
            mauxtete:this.state.WhyABILYTY=="2"?true:false ,
            deteriorationOfGC:this.state.WhyABILYTY=="3"?true:false ,
            
            deteriorationOfGC:this.state.statusABILYTY=="yes"?true:false ,
            //missingability:this.state.statusABILYTY=="yes"?true:false ,
            abilitytime:this.state.statusABILYTY_DURATION=="1"?"DAYS":this.state.statusABILYTY_DURATION=="2"?"WEEK":this.state.statusABILYTY_DURATION=="3"?"MONTHS":"YEAR",

            diarrhea:this.state.statusSYMTOME.findIndex(item => item === "1") !="-1"?true:false,
            nauseaOrVomiting:this.state.statusSYMTOME.findIndex(item => item === "2") !="-1"?true:false,
            chestPain:this.state.statusSYMTOME.findIndex(item => item === "3") !="-1"?true:false,
            epigastralgia:this.state.statusSYMTOME.findIndex(item => item === "4") !="-1"?true:false,
            soreThroat:this.state.statusSYMTOME.findIndex(item => item === "5") !="-1"?true:false,
            arthalgia:this.state.statusSYMTOME.findIndex(item => item === "6") !="-1"?true:false,


        }
        return symtome;
    }
  render() {
    if(this.state.statususerfillform==="no")
    {
        malade=this.state.statusgender==1?'المريضة ':'المريض '
    }

   
     if (this.state.current === 0) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                            <Text style={styles.textlabel}>  من يقوم بتعمير هذه الإستمارة ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressuserfillform("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statususerfillform ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>{this.state.statusgender==1?'المريضة ':'المريض '}   </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressuserfillform("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statususerfillform ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>شخص اخر</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
                        {this.state.statususerfillform==="no" ? (
                        <View>
                            <Text style={styles.textlabel}></Text> 
                        <Text style={styles.textlabel1}>لماذا ؟ {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
                {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statususerfillform=="empty")||(this.state.statususerfillform=="no" && this.state.statusWhyuserfillform=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statususerfillform=="empty")||(this.state.statususerfillform=="no" && this.state.statusWhyuserfillform=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
    else if (this.state.current === 1) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                            <Text style={styles.textlabel}> هل خضعت لتحليل الاصابة بفيروس كورونا ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPresstestanalys("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalys ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>نعم </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresstestanalys("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalys ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> لا </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
                {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                  <TouchableOpacity  style={(this.state.statustestanalys=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statustestanalys=="empty") ? true : false}  onPress={() => this._onNext(this.state.statustestanalys ==="yes"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
    else if (this.state.current === 2) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                            <Text style={styles.textlabel}>  ماهي نتيجة التحليل ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressresultatanalys("yes")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalys ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>{this.state.statusgender==1?'مصابة ':'مصاب '}    </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressresultatanalys("no")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalys ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> {this.state.statusgender==1?'غير مصابة ':'غير مصاب '}   </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
                {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statusresultatanalys=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusresultatanalys=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 3) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>هل كنت في إحدى المناطق التي أعلنت عنها وزارة الصحة كبؤرة لإنتشار المرض خلال الأسبوعين الفارطين؟ </Text>
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statuscontact ==="yes"?(this.state.statustestanalys ==="yes"?1:2):3)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statuszonecritique=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statuszonecritique=="empty") ? true : false}  onPress={() => this._onNext(this.state.statuszonecritique ==="yes"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 4) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
              
                        <Text style={styles.textlabel1}>  حدد المنطقة  </Text> 
                         
                          
                            <Text style={styles.textlabel}> {br} </Text> 
                <TextInput
                    placeholder="المنطقة "
                    style={styles.textInput}
                    value={this.state.statusville} onChangeText={ (text) => this.setState({ statusville: text }) }
                    />
                        <Text style={styles.textlabel}>  {br} </Text> 
                     
                        <Text style={styles.textlabel1}>   منذ متى قمت بزيارتها  </Text> 
                       
                            <Text style={styles.textlabel}> {br} </Text> 
                    <TextInput keyboardType='numeric'
                    placeholder="عدد الأيام "
                    style={styles.textInput}
                    value={this.state.statusnbrejours} onChangeText={ (text) => this.setState({ statusnbrejours: text }) }
                    />
            
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                  <TouchableOpacity  style={(this.state.statusville==""||this.state.statusnbrejours=="")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusville==""||this.state.statusnbrejours=="") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 5) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل كان لك اتصال مباشر بمريض(ة) تاكدت اصابته(ا) بفيروس الكورونا خلال الاسبوعين الفارطين </Text>
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPresscontactmalade("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontactmalade==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>نعم </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresscontactmalade("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontactmalade ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>لا </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statuszonecritique ==="yes"?1:2)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statuscontactmalade=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statuscontactmalade=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 6) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل يوجد في محيطك الاجتماعي (العمل ،المنزل..)أشخاص يعانون نفس الاعراض حمى،سعال،ضيق تنفس, ضيق تنفس شديد  </Text>
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressentourage("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusentourage ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>نعم </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressentourage("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusentourage ==="no" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>لا </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statusentourage=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusentourage=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusentourage ==="yes"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 7) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
              
                        <Text style={styles.textlabel1}> عدد الاشخاص  </Text> 
                         
                          
                            <Text style={styles.textlabel}> {br} </Text> 
                <TextInput keyboardType='numeric'
                    placeholder="عدد الاشخاص "
                    style={styles.textInput}
                    value={this.state.statusnbepersentourage} onChangeText={ (text) => this.setState({ statusnbepersentourage: text }) }
                    />
             
                            
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressLivingentourage("1")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusLivingentourage ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> تسكنون في نفس المنزل </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressLivingentourage("2")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusLivingentourage ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> تشتغلون معا </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => this._onPressLivingentourage("3")}>
                            <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusLivingentourage ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>فضاء لقاء اخر </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
   
        
           
                </View>
                <Text style={styles.textlabel}> {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statusLivingentourage=="empty"|| this.state.statusnbepersentourage=="")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusLivingentourage=="empty"||this.state.statusnbepersentourage=="") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 8) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>هل تشكو من إرتفاع في درجة حرارتك ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                            <View>
                                <Text style={styles.textlabel}></Text> 
                                <Text style={styles.textlabel1}> ما هي درجة حرارتك  </Text> 
                                <TextInput keyboardType='numeric'
                                    placeholder="درجة حرارتك "
                                    style={styles.textInput}
                                    value={this.state.statusdugreefievre} onChangeText={ (text) => this.setState({ statusdugreefievre: text }) }
                                    />
                            </View>  
                            ) : (
                                <View/>
                            )}
        
           
                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statusentourage ==="yes"?1:2)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statusfievre=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusfievre=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 9) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل لديك سعال أو أن درجة السعال التي تشكو منها في العادة إزدادت حدة ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                  <TouchableOpacity  style={(this.state.statustoux=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statustoux=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 10) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>  هل تشكو من ضيق تنفس أو تعكر في قدرتك على التنفس مقارنة بالسابق ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusASPHYXIE=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusASPHYXIE=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusASPHYXIE==="yes"?1:3)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 11) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تشكو من عدم القدرة على الحديث كما في السابق  ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressPARLE("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusPARLE ==="yes"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color: "white" , fontWeight: "bold"}}>نعم</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressPARLE("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusPARLE ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white", fontWeight: "bold"}}>لا</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>

                </View>
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusPARLE=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusPARLE=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusPARLE==="yes"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 12) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                            <Text style={styles.textlabel}> لماذا ؟   </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("1")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY.findIndex(item => item === "1") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>أحس بضيق في التنفس</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("2")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY.findIndex(item => item === "2") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color: "white" , fontWeight: "bold"}}>صداع شديد يمنعني من الحديث</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("3")}>
                            <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY.findIndex(item => item === "3") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color: "white" , fontWeight: "bold"}}>أحس بتعب شديد</Text>
                            </Animatable.View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => this._onPressWhyABILYTY("4")}>
                            <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusWhyABILYTY.findIndex(item => item === "4") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color: "white" , fontWeight: "bold"}}>آخر</Text>
                            </Animatable.View>
                            </TouchableWithoutFeedback>

                </View>
                <Text style={styles.textlabel}> {br}  </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusWhyABILYTY=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusWhyABILYTY=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
   
    else if (this.state.current === 13) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>هل تستطيع الحركة و القيام بحاجياتك دون مساعدة ؟</Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() =>  this._onPrev(this.state.statusASPHYXIE ==="yes"?(this.state.statusPARLE ==="yes"?1:2):3)}>
              
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusABILYTY=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusABILYTY=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusABILYTY==="no"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 14) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>منذ متى ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("1")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>أيام  </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("2")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>أسابيع </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("3")}>
                            <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>أشهر   </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressABILYTY_DURATION("4")}>
                            <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusABILYTY_DURATION ==="4" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>سنوات </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                </View>
                <Text style={styles.textlabel}> {br}  </Text> 
            <View style={styles.innerContainer}> 
          
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusABILYTY_DURATION=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusABILYTY_DURATION=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    
    else if (this.state.current === 15) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}>هل تشكو من أحد هذه الأعراض ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("1")}>
                        <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "1") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>إسهال</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("2")}>
                        <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "2") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>تقيؤ</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("3")}>
                        <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "3") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>أوجاع في الصدر</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("4")}>
                        <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "4") !="-1"?this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>أوجاع اعلى البطن</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("5")}>
                        <Animatable.View ref="view5" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "5") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}> ألم حاد في الحنجرة</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("6")}>
                        <Animatable.View ref="view6" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "6") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>أوجاع في المفاصل و العضلات </Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._onPressSYMTOME("7")}>
                        <Animatable.View ref="view7" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusSYMTOME.findIndex(item => item === "7") !="-1"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>لا أشكو من هذه الأعراض </Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                </View>
                <Text style={styles.textlabel}>  </Text> 
            <View style={styles.innerContainer}> 
          
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statusSYMTOME=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusSYMTOME=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
  
  
    else if (this.state.current === 16) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تشكو من تدهور قدرتك على الشم أو التذوق ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                 <TouchableOpacity  style={(this.state.statussenseofsmell=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statussenseofsmell=="empty") ? true : false}  onPress={() => this._onNext(1)}>

                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addsymtome()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
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
        height: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textlabel: {
        fontSize: 24,
        paddingRight:30,
        left:10,
        color:'white'
      },
      textlabel1: {
        fontSize: 24,
        paddingRight:30,
        left:10,
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
      },
      addButtonnext: {
        height: 36,
        backgroundColor: '#F0493E',
        right:20,
        borderColor: '#F0493E',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    addButtonnextDisable: {
        height: 36,
        backgroundColor: '#bdbdbd',
        right:20,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    addButtonprev: {
        height: 36,
        backgroundColor: '#F0493E',
        borderColor: '#F0493E',
        left:20,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    addButtonprevdisabled: {
        height: 36,
        backgroundColor: '#F0493E',
        borderColor: '#F0493E',
        left:20,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        opacity: 0.3
    },
    addButtonText: {
      fontSize: 24,
      paddingRight:30,
      left:10,
      color:'white'
    },
    innerContainer:{  
        // flex: 1,  
         width: "100%",  
         flexDirection: "row",  
         justifyContent: "space-between",  
         alignItems: "center"  
      }
});