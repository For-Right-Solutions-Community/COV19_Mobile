import React, { Component } from "react";

import { ProgressBarAndroid,KeyboardAvoidingView, Dimensions, Keyboard, StyleSheet, Button,TouchableWithoutFeedback, UIManager,TextInput ,TouchableOpacity,ScrollView,TouchableHighlight} from 'react-native';
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
import * as Animatable from 'react-native-animatable';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ProgressBar, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _createpatient,_createPatientSymtomeAntecedent,getUserToken,_callcreatePatientSymtomeAntecedent} from '../../Store/actions';
import {getInitialDataPatient} from './initObjectPatient';
import SearchableDropdown from 'react-native-searchable-dropdown';
const llll=' من يقوم بتعمير هذه الاستمارة ؟'
const br = `\n`;
var malade="";
var masculin="";
const nbreecran=34;
var radio_props = [
    {label: '   ذكر     ', value: 0 },
    {label: '  أنثى     ', value: 1 }
  ];
  var radio_propsetatcivil = [
    {label: ' أعزب/عزباء ', value: 0 },
    {label: ' متزوج / متزوجة ', value: 1 },
    {label: ' أرمل / أرملة ', value: 2 },
    {label: ' مطلق / مطلقة ', value: 3 }
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
  var items= [
    {
      id: 1,
      name: "ولايةأريانة",
      value:"ARIANA"
    },
    {
      id: 2,
      name: "ولاية باجة",
      value:"BEJA"
    },
    {
      id: 3,
      name: "ولاية بن عروس",
      value:"BENAROURS"
    },
    {
      id: 4,
      name: "ولاية بنزرت",
      value:"BIZERTE"
    },
    {
      id: 5,
      name: "ولاية تطاوين",
      value:"TATOUINE"
    },
    {
      id: 6,
      name: "ولاية توزر",
      value:"TOUZUER"
    },
    {
      id: 7,
      name: "ولاية تونس",
      value:"TUNIS"
    },
    {
      id: 8,
      name: "ولاية جندوبة",
      value:"JANDOUBA"
    },
    {
      id: 9,
      name: "ولاية زغوان",
      value:"ZAGHOUIN"
    },
    {
      id: 10,
      name: "ولاية سليانة",
      value:"SILIANA"
    },
    {
      id: 11,
      name: "ولاية سوسة",
      value:"SOUSSE"
    },
    {
      id: 12,
      name: "ولاية سيدي بوزيد",
      value:"SIDIBOUZID"
    },
    {
        id: 13,
        name: "ولاية صفاقس",
        value:"SFAX"
      },
      {
        id: 14,
        name: "ولاية قابس",
        value:"GABES"

      },
      {
        id: 15,
        name: "ولاية قبلي",
        value:"KBELLI"
      },
      {
        id: 16,
        name: "ولاية القصرين",
        value:"GASSERINE"
      },
      {
        id: 17,
        name: "ولاية قفصة",
        value:"GAFSA"
      },
      {
        id: 18,
        name: "ولاية القيروان",
        value:"KAIROIN"
      },
      {
        id: 19,
        name: "ولاية الكاف",
        value:"ELKEF"
      },
      {
        id: 20,
        name: "ولاية مدنين",
        value:"MEDINE"
      },
      {
        id: 21,
        name: "ولاية المنستير",
        value:"MONASTIR"
      },
      {
        id: 22,
        name: "ولاية منوبة",
        value:"MANNOUBA"
      },
      {
        id: 23,
        name: "ولاية المهدية",
        value:"MAHDIA"
      },
      {
        id: 24,
        name: "ولاية نابل",
        value:"NABEUL"
      }
  ];
var patient;
 class Editpatient extends Component {
    constructor(props) {
        super(props);
        patient=getInitialDataPatient();
        this.state = ({

              selectedindex:0,
              selectedValueville:"",
              adresse:"",
              longitude: 'unknown',
              latitude: 'unknown',
              indeterminate:false,
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
              statusrespiratory:"empty",
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
              statusImmunity:-1,
              selectedville:undefined,
              

              
              


        });
      
    }
    watchID = null;
    componentDidMount = () => {
 
       navigator.geolocation.getCurrentPosition(
          (position) => {
             const initiallongitude = JSON.stringify(position.coords.longitude);
             const initiallatitude = JSON.stringify(position.coords.latitude);
             this.setState({ longitude:initiallongitude, latitude:initiallatitude});
          },
          (error) => alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
       );
     
    }
    componentWillUnmount = () => {
       navigator.geolocation.clearWatch(this.watchID);
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
    _onPressrespiratory(statusrespiratory){
        const currentStatus = statusrespiratory;
        this.setState({ statusrespiratory: currentStatus});
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
        this.refs.view4.tada(800);
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
    _addpatient()
    {
        this.setState({indeterminate: true});
        console.log('end');
        let antecedent=this._fillAntecedent();
        let exposure=this._fillexposure()
        let patient=this._fillPatient(exposure,antecedent);
        let symtome=this._fillSymtome();
        
        //this.props._createPatientSymtomeAntecedent(patient,symtome,antecedent);
        _callcreatePatientSymtomeAntecedent(patient,symtome,antecedent).then(()=>{
            this.props.getUserToken();
            this.setState({indeterminate: false});
            this.props.navigation.goBack();
        });
     
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

    _fillPatient(iexposure,antecedent)
    { 
             

            patient.firstname=this.state.firstname;
            patient.lastname=this.state.lastname;
            patient.age=this.state.age;
            patient.phone=this.state.tel;
            patient.backupPhone=this.state.telfamille;
            patient.gender=this.state.statusgender==0?"MALE":"FEMALE";
            patient.civilStatus=this.state.statusetatcivil==0?"SINGLE":this.state.statusetatcivil==1?"MARRIED":this.state.statusetatcivil==2?"WIDOWED":"DIVORDECED";
            patient.address={
                state: this.state.selectedValueville,
                avenue: this.state.adresse
              };
              patient.location= {
                lat: this.state.latitude,
                lng: this.state.longitude
              };
              patient.antecedentRecord=antecedent;
              patient.exposure=iexposure;
              patient.forumlaother=this.state.statususerfillform=="yes"?true:false;

        
        return patient;
    }
    _fillexposure()
    {
        let exposure={
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
            patient:null,
          

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
 

    _fillAntecedent()
    {
 
        let Antecedent={
            patient:null,
            diabetic:this.state.statusDIABETE=="yes"?true:false,
            diabeticMonths:this.state.statusnbreanneediabitic,
            diabeticComplicationsEyes:this.state.statusetatdiabitic==0?true:false,
            diabeticComplicationsHeart:this.state.statusetatdiabitic==1?true:false,
            diabeticComplicationsKidneys:this.state.statusetatdiabitic==2?true:false,
            diabeticComplicationsNerves:this.state.statusetatdiabitic==3?true:false,
            diabeticComplicationsFeet:this.state.statusetatdiabitic==4?true:false,
            diabeticComplications:this.state.statusetatdiabitic==5?true:false,
           // diabeticComplicationsOther


           hypertension:this.state.statushypertension=="yes"?true:false,
           hypertensionMonths:this.state.statusnbreanneehypertension,


            //respiratory:
            respiratory:this.state.statusrespiratory=="1"?true:false,
            respiratoryAsthma:this.state.statusrespiratory=="1"?true:false,
            respiratoryBPCO:this.state.statusrespiratory=="2"?true:false,
            respiratoryThorax:this.state.statusrespiratory=="3"?true:false,
            respiratoryOther:this.state.statusrespiratory=="4"?true:false,

            heartDisease:this.state.statuscoeur=="yes"?true:false,
            renalFailure:this.state.statusRenal=="yes"?true:false,

            cancer:this.state.statusconcer=="yes"?true:false,

            cancerTypeLung:this.state.statusplaceconcer=="1"?true:false,
            cancerTypeLiver:this.state.statusplaceconcer=="2"?true:false,
            cancerTypeORL:this.state.statusplaceconcer=="3"?true:false,
            cancerTypeOther:this.state.statusplaceconcer=="4"?true:false,
            
            

            cancerTreatmentChemotherapy:this.state.statustreatmentconcer=="1"?true:false,
            cancerTreatmentRadiotherapy:this.state.statustreatmentconcer=="2"?true:false,
            cancerTreatmentSurgery:this.state.statustreatmentconcer=="3"?true:false,
            
            immuneDisease:this.state.statusImmunity=="1"?true:false,



        }

        return Antecedent;
    }

    onValueChangeville(value) {
        this.setState({
          selectedville: value
        });
      }

      _selectedValue(item) {

        this.setState({ selectedValueville: item.value,selectedindex :item.id-1});
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
         
                    <Text style={styles.textlabel1}> الإسم :</Text> 
                  
                    <TextInput
                    placeholder="الإسم"
                    style={styles.textInput}
                    value={this.state.firstname} onChangeText={ (text) => this.setState({ firstname: text }) }
                    />
                    <Text style={styles.textlabel}> </Text> 
                    <Text style={styles.textlabel1}> اللقب :</Text> 
                    <TextInput
                    placeholder="اللقب"
                    style={styles.textInput}
                    value={this.state.lastname} onChangeText={ (text) => this.setState({ lastname: text }) }
                    />
                    <Text style={styles.textlabel}> </Text> 
                    <Text style={styles.textlabel1}> العمر :</Text> 
                    <TextInput keyboardType='numeric'
                    placeholder="العمر"
                    style={styles.textInput} value={this.state.age} onChangeText={ (text) => this.setState({ age: text }) }
                    />
                        <Text style={styles.textlabel}> </Text> 
                        </View>
                <View style={styles.row}>
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
                                onPress={(value) => {this.setState({statusgender:value,validitynext:true})}}
                                borderWidth={1}
                                buttonInnerColor={'#96C85B'}
                                buttonOuterColor={this.state.statusgender === i ? '#96C85B' : '#000'}
                                buttonSize={40}
                                buttonOuterSize={50}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 20}}
                                />
                                <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={(value) => {this.setState({statusgender:value,validitynext:true})}}
                                labelStyle={{fontSize: 20, color: 'black'}}
                                labelWrapStyle={{}}
                                />
                    </RadioButton>
                    ))
                }  
                </RadioForm>
                </View>

                 <Text style={styles.textlabel}>  </Text> 
                     <View style={styles.innerContainer}> 
                        {this.state.current!= 0 ? 
                    <TouchableOpacity  style={styles.addButtonprev}  >
                    <Text style={styles.addButtonText}> السابق </Text> 
                        </TouchableOpacity>: <Text style={styles.addButtonText}>  </Text> }

    
                        {!this.state.isLast ? 
                        <TouchableOpacity  style={(this.state.firstname == ''|| this.state.lastname == ''|| this.state.age == ''|| this.state.statusgender==-1)?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.firstname == ''|| this.state.lastname == ''|| this.state.age == ''|| this.state.statusgender==-1) ? true : false}  onPress={() => this._onNext(1)}>
                        <Text style={styles.addButtonText}> الموالي </Text> 
                        </TouchableOpacity>

                        : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                        <Text style={styles.addButtonText}> تسجيل </Text> 
                        </TouchableOpacity>
                        }
   
                  </View>
                  </KeyboardAvoidingView>
                  </ScrollView >
      
          
        );
    }
    if (this.state.current === 1) {

        
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            
           
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
                 <View style={styles.row}>
                    <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
                    <ProgressBar progress={pourcentage} color={Colors.red800} />
                    <Text style={styles.textlabel}> </Text> 
                        <Text style={styles.textlabel1}> رقم الهاتف الشخصي :</Text> 
                        <Text style={styles.textlabel}> </Text> 
                        <TextInput keyboardType='numeric'
                            placeholder="الهاتف"
                            style={styles.textInput}
                            value={this.state.tel} onChangeText={ (text) => this.setState({ tel: text }) }
                            />

                        <Text style={styles.textlabel1}> رقم هاتف أحد/إحدى  الأقارب (في حالة عدم التحصل عليك) :</Text> 
                        <Text style={styles.textlabel}> </Text> 
                        <TextInput keyboardType='numeric'
                            placeholder="هاتف أحد الأقارب"
                            style={styles.textInput}
                            value={this.state.telfamille} onChangeText={ (text) => this.setState({ telfamille: text }) }
                            />

                        <Text style={styles.textlabel}> </Text> 
                    
           
                    </View>
                   
      
                  <Text style={styles.textlabel}>  </Text> 
                     <View style={styles.innerContainer}> 
                        {this.state.current!= 0 ? 
                    <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                    <Text style={styles.addButtonText}> السابق </Text> 
                        </TouchableOpacity>: null}

                        {!this.state.isLast ? 
                        <TouchableOpacity  style={(this.state.tel==""||this.state.telfamille=="")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.tel==""||this.state.telfamille=="") ? true : false}  onPress={() => this._onNext(1)}>
                        <Text style={styles.addButtonText}> الموالي </Text> 
                        </TouchableOpacity>    

                        : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                       
          
               <View>
                <Text style={styles.textlabel1}>
                {"الولاية"}
                </Text>
                <SearchableDropdown
            onItemSelect={(item,index) => {
                this._selectedValue(item);
              
            }}
            containerStyle={{ padding: 5 }}
            /*
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            */
            itemStyle={{
             
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{fontSize: 22, color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={this.state.selectedindex}
            resetValue={false}
            textInputProps={
              {
                placeholder: "الولاية",
                underlineColorAndroid: "transparent",
                style: {
                    fontSize: 22,
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                //onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
            </View>
                 
                <Text style={styles.textlabel}> </Text> 
                <Text style={styles.textlabel1}>  العنوان :</Text> 
                <Textarea 
                    style={styles.textInput}
                    rowSpan={4}
                    value={this.state.adresse} onChangeText={ (text) => this.setState({ adresse: text }) } />
                <Text style={styles.textlabel}> </Text> 
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
                                buttonOuterSize={50}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 140}}
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
                <Text style={styles.textlabel}>  </Text> 
                     <View style={styles.innerContainer}> 
                        {this.state.current!= 0 ? 
                    <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                    <Text style={styles.addButtonText}> السابق </Text> 
                        </TouchableOpacity>: null}

                        {!this.state.isLast ? 
                        <TouchableOpacity  style={(this.state.statusetatcivil=="-1")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusetatcivil=="-1") ? true : false}  onPress={() => this._onNext(1)}>
                        <Text style={styles.addButtonText}> الموالي </Text> 
                        </TouchableOpacity>    

                        : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                            <Text style={styles.textlabel}> هل سافرت خارج البلاد خلال الشهر الفارط ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                        <View>
                            <Text style={styles.textlabel}></Text> 
                        <Text style={styles.textlabel1}>  إلى أي بلد؟ {br}</Text> 
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
                <Text style={styles.textlabel}>  </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statustestanalys ==="yes"?1:2)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statusvoyage=="empty")||(this.state.statusvoyage==="yes" && this.state.statuspaysvoyage=="")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusvoyage=="empty")||(this.state.statusvoyage==="yes" && this.state.statuspaysvoyage=="") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                         <Text style={styles.textlabel}>هل كان لك إتصال مباشر بشخص سافر خارج البلاد الشهر الفارط ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPresscontact("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontact ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>نعم </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresscontact("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontact ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> لا </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
            
                       
            {this.state.statuscontact==="yes" ? (
              <View >
                 <Text style={styles.textlabel}></Text> 
                 <Text style={styles.textlabel1}>  هل يسكن معك في نفس المنزل ؟  {br}</Text> 
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
                                buttonOuterSize={50}
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
                <Text style={styles.textlabel}> </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
               <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
               <Text style={styles.addButtonText}> السابق </Text> 
                </TouchableOpacity>: null}

                {!this.state.isLast ? 
                <TouchableOpacity  style={(this.state.statuscontact=="empty")||(this.state.statuscontact==="yes" && this.state.statusLiving=="-1")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statuscontact=="empty")||(this.state.statuscontact==="yes" && this.state.statusLiving=="-1") ? true : false}  onPress={() => this._onNext(this.state.statuscontact ==="yes"?1:3)}>
                <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                            <Text style={styles.textlabel}> هل خضع الشخص المذكور لتحليل الاصابة بفيروس كورونا   </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPresstestanalysvoyag("yes")}>
                            <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalysvoyag ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>نعم </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresstestanalysvoyag("no")}>
                            <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustestanalysvoyag ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
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
                 <TouchableOpacity  style={(this.state.statustestanalysvoyag=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statustestanalysvoyag=="empty") ? true : false}  onPress={() => this._onNext(this.state.statustestanalysvoyag ==="yes"?1:2)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                            <Text style={styles.textlabel}>  ماهي نتيجة التحليل ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPressresultatanalysvoyag("yes")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalysvoyag ==="yes" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:"white", fontWeight: "bold"}}>مصاب   </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressresultatanalysvoyag("no")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusresultatanalysvoyag ==="no"? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> غير مصاب   </Text>
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
                  <TouchableOpacity  style={(this.state.statusresultatanalysvoyag=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusresultatanalysvoyag=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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
                        <Text style={styles.textlabel}> هل كان لك اتصال مباشر بمريض(ة) تاكدت اصابته(ا) بفيروس الكورونا  خلال الاسبوعين الفارطين </Text>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 17) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 18) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 19) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
   
    else if (this.state.current === 20) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 21) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    
    else if (this.state.current === 22) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
  
  
    else if (this.state.current === 23) {
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

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 24) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تتابع من أجل أحد هذه الأمراض ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                        <TouchableWithoutFeedback onPress={() => this._onPressrespiratory("1")}>
                        <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusrespiratory ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:  "white" , fontWeight: "bold"}}>ضيق تنفس مزمن : ربو</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._onPressrespiratory("2")}>
                        <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusrespiratory ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color: "white" , fontWeight: "bold"}}> مرض الإنسداد الرئوي المزمن </Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => this._onPressrespiratory("3")}>
                        <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusrespiratory ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color: "white" , fontWeight: "bold"}}>أجريت عملية على الصدر أو القلب</Text>
                        </Animatable.View>
                        </TouchableWithoutFeedback>

                       <TouchableWithoutFeedback onPress={() => this._onPressrespiratory("4")}>
                        <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusrespiratory ==="4" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                        <Text style={{color:"white" , fontWeight: "bold"}}>لا أشكو من هذه الأمراض </Text>
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
                <TouchableOpacity  style={(this.state.statusrespiratory=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusrespiratory=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                 <Text style={styles.addButtonText}> الموالي </Text> 
                  </TouchableOpacity>    

                  : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                  <Text style={styles.addButtonText}> تسجيل </Text> 
                  </TouchableOpacity>
                }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }



    else if (this.state.current === 25) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تعاني من مرض السكري ؟  {br}</Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
								
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
											<View >
													<Text style={styles.textlabel}></Text> 
												<Text style={styles.textlabel1}>عدد سنوات الإصابة بالمرض   {br}</Text> 
												<TextInput keyboardType='numeric'
														placeholder="عدد سنوات "
                                                        style={styles.textInput}
                                                        value={this.state.statusnbreanneediabitic} onChangeText={ (text) => this.setState({ statusnbreanneediabitic: text }) }
														/>
											</View>  
									) : (
										<View/>
                                    )}
                                    
     
							</View>  

                <Text style={styles.textlabel}> {br} </Text> 

            <View style={styles.innerContainer}> 
                     {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                    <TouchableOpacity  style={(this.state.statusDIABETE=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusDIABETE=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusDIABETE==="yes"?1:2)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 26) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> ماهي مخلفات السكري لديك ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> </Text> 
								
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
                                buttonWrapStyle={{marginLeft: 140}}
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

                <Text style={styles.textlabel}>  </Text> 

            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 

                    <TouchableOpacity  style={(this.state.statusetatdiabitic=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusetatdiabitic=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 27) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تعاني من ضغط الدم ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                			
                            {this.state.statushypertension==="yes" ? (
                            <View>
                                <Text style={styles.textlabel}></Text> 
                            <Text style={styles.textlabel1}>عدد سنوات الإصابة بالمرض   {br}</Text> 
                            <TextInput keyboardType='numeric'
                                    placeholder="عدد سنوات "
                                    style={styles.textInput}
                                    value={this.state.statusnbreanneehypertension} onChangeText={ (text) => this.setState({ statusnbreanneehypertension: text }) }
                                    />
                        </View>  
                    ) : (
                        <View/>
                    )}
                                    
     
							</View>  

                <Text style={styles.textlabel}> {br} </Text> 

            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statusDIABETE==="yes"?1:2)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                    <TouchableOpacity  style={(this.state.statushypertension=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statushypertension=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

  

    else if (this.state.current === 28) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تعاني من أمراض القلب /انسداد اوعية القلب ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                    <TouchableOpacity  style={(this.state.statuscoeur=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statuscoeur=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 29) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تعاني من أمراض الكلى: قصور كلوي /تصفية الدم ؟ </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                     <TouchableOpacity  style={(this.state.statusRenal=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusRenal=="empty") ? true : false}  onPress={() => this._onNext(1)}>

                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }

   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    
    else if (this.state.current === 30) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تشكو من إعاقة ذهنية أو جسدية ؟ </Text>  
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
           
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                    <TouchableOpacity  style={(this.state.statushindering=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statushindering=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }
   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }


    else if (this.state.current === 31) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل أصبت بمرض السرطان أو تتابع علاجا بشأنه ؟ </Text>   
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
           
            {this.state.current!= 0 ? 
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(1)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                     <TouchableOpacity  style={(this.state.statusconcer=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusconcer=="empty") ? true : false}  onPress={() => this._onNext(this.state.statusconcer ==="yes"?1:3)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }
   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }
    

    else if (this.state.current === 32) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> ماهو العضو المصاب لديك ؟  </Text>   
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
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
                            <Text style={{color:  "white" , fontWeight: "bold"}}> الحلق و الأنف و الأذنين </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPressplaceconcer("4")}>
                            <Animatable.View ref="view4" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusplaceconcer ==="4" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>  آخر   </Text>
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
                    <TouchableOpacity  style={(this.state.statusplaceconcer=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusplaceconcer=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }
   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 33) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> ماهو العلاج المعتمد في مرض السرطان  ؟  </Text>  
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("1")}>
                            <Animatable.View ref="view1" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="1" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}>كيميائي</Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("2")}>
                            <Animatable.View ref="view2" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="2" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color: "white" , fontWeight: "bold"}}> أشعة </Text>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this._onPresstreatmentconcer("3")}>
                            <Animatable.View ref="view3" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustreatmentconcer ==="3" ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                            <Text style={{color:  "white" , fontWeight: "bold"}}> جراحة </Text>
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
                     <TouchableOpacity  style={(this.state.statustreatmentconcer=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statustreatmentconcer=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    : <TouchableOpacity  style={styles.addButtonnext}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }
   
        
            </View>
            </KeyboardAvoidingView>
            </ScrollView > 
        );
    }

    else if (this.state.current === 34) {
        let pourcentage=(this.state.current)/(nbreecran);
        return (
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
            <View style={styles.row}>
               <Text style={styles.textlabel1}>{Math.floor(pourcentage*100)} % </Text>
               <ProgressBar progress={pourcentage} color={Colors.red800} />
               <Text style={styles.textlabel}> </Text> 
                        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor:  "#F0493E", borderRadius:20}}>
                        <Text style={styles.textlabel}> هل تعاني من أحد أمراض ضعف المناعة  ؟  </Text> 
                            </View>
                            <Text style={styles.textlabel}> {br} </Text> 
                            <Text style={styles.textlabel}> {br} </Text> 
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
                <Text style={styles.textlabel}> {br} {br} </Text> 
            <View style={styles.innerContainer}> 
           
            {this.state.current!= 0 ? 
            
                <TouchableOpacity  style={styles.addButtonprev}  onPress={() => this._onPrev(this.state.statusconcer ==="yes"?1:3)}>
                <Text style={styles.addButtonText}> السابق </Text> 
                    </TouchableOpacity>: null}

                    {!this.state.isLast ? 
                    <TouchableOpacity  style={(this.state.statusImmunity=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusImmunity=="empty") ? true : false}  onPress={() => this._onNext(1)}>
                    <Text style={styles.addButtonText}> الموالي </Text> 
                    </TouchableOpacity>    

                    :                     <TouchableOpacity  style={(this.state.statusImmunity=="empty")?styles.addButtonnextDisable:styles.addButtonnext}  disabled={(this.state.statusImmunity=="empty") ? true : false}  onPress={() => this._addpatient()}>
                    <Text style={styles.addButtonText}> تسجيل </Text> 
                    </TouchableOpacity>
                    }
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
      }, container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemSeparatorStyle:{
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "right",
    width: "99%",
    padding: 10,
    flexDirection: "row",
    fontSize: 18, fontWeight: "bold"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "right",
    width: "99%",
    flexDirection: "row",
    fontSize: 18, fontWeight: "bold"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "right",
    fontSize: 18, fontWeight: "bold"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25, 
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        _createpatient: _createpatient,
        _createPatientSymtomeAntecedent:_createPatientSymtomeAntecedent,
        getUserToken:getUserToken
    }, dispatch);
  }
  function mapStateToProps(state) {
    return {
      patient: state.patient
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Editpatient);