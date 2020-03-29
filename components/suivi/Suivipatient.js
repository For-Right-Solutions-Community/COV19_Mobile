import React, { Component } from "react";
import {
    StyleSheet, 
    Alert,Button,TouchableWithoutFeedback
} from 'react-native';
import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
import * as Animatable from 'react-native-animatable';

const br = `\n`;
const nbreecran=5;
export default class Suivipatient extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            firstname:'',
            lastname:'',
            tel:'',
            age:'',
            current: 0,
            isLast:false,
              istoux:"",
              isgorge:"",
              isfievre:"",
              isdiarrhe:"",
              isvoyage:"",
              iscontact:"",
              statustoux:false,
              statusgorge:false,
              statusfievre:false,
              statusdiarrhe:false,
              statusvoyage:false,
              statuscontact:false,
              onColor:"#96C85B"

        });
      
    }

 
    _onPresstoux(statustoux){
        const currentStatus = statustoux;
        this.setState({ statustoux: currentStatus});
        if(currentStatus)
            this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);
    }
    _onPressgorge(statusgorge){
        const currentStatus = statusgorge;
        this.setState({ statusgorge: currentStatus});
        if(currentStatus)
        this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);
    }
    _onPressfievre(statusfievre){
        const currentStatus = statusfievre;
        this.setState({ statusfievre: currentStatus});
        if(currentStatus)
        this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);

    }
    _onPressdiarrhe(statusdiarrhe){
        const currentStatus = statusdiarrhe;
        this.setState({ statusdiarrhe: currentStatus});
        if(currentStatus)
        this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);
    }
    _onPressvoyage(statusvoyage){
        const currentStatus =statusvoyage ;
        this.setState({ statusvoyage: currentStatus});
        if(currentStatus)
        this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);
    }
    _onPresscontact(statuscontact){
        const currentStatus = statuscontact;
        this.setState({ statuscontact: currentStatus});
        if(currentStatus)
        this.refs.viewoui.tada(800);
        else
        this.refs.viewnon.tada(800);
    }
    _addpatient()
    {
        console.log('end');

    }
    _onPrev()
    {
        let index=this.state.current-1;
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
    _onNext()
    {
        let index=this.state.current+1;
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
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}>Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ? {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresstoux(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statustoux ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white", fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresstoux(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statustoux ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>
        );
    }
    else  if (this.state.current === 1) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}>Ces derniers jours,avez-vous un mal de gorge ? {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressgorge(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusgorge ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressgorge(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statusgorge ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
   
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View> 
        );
    }
    else  if (this.state.current === 2) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}>Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?  {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressfievre(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusfievre ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressfievre(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statusfievre ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:"white" , fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
        );
    }
    else  if (this.state.current === 3) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}> Ces dernières 24 heures, avez-vous de la diarrhée (Nausée, vomissements) ?   {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressdiarrhe(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusdiarrhe ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressdiarrhe(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statusdiarrhe ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
        );
    }
    else  if (this.state.current === 4) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}> Était-il (elle) en voyage au cours du moi dernier ?   {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPressvoyage(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statusvoyage ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPressvoyage(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statusvoyage ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white", fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View> 
            <View style={{ flex: 1}}>
           
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
            </View>
            </View>  
            </View> 
        );
    }
    else  if (this.state.current === 5) {
        return (
            <View style={styles.container}>
            <View style={{ flex: 1}}>
            <Text style={styles.pageText}> {this.state.current+1}/{nbreecran+1} </Text> 
             </View>  
            <View style={{ flex: 3}}>
                <Text style={styles.textlabel}> Était-il (elle) en contact avec une personne qui revient d’un voyage ?   {br} {br}</Text> 
                <Text style={styles.textoption}> Sélectionnez une option :{br}</Text> 
                <TouchableWithoutFeedback onPress={() => this._onPresscontact(true)}>
                <Animatable.View ref="viewoui" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.statuscontact ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color:  "white" , fontWeight: "bold"}}>oui</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this._onPresscontact(false)}>
                <Animatable.View ref="viewnon" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: !this.state.statuscontact ? this.state.onColor : "#bdbdbd", borderRadius:20}}>
                <Text style={{color: "white" , fontWeight: "bold"}}>Non</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
   
            </View>  
            <View style={styles.buttonContainer}>
            {this.state.current!= 0 ? <Button title={'Précédent'} onPress={() => this._onPrev()} /> : null}
              
                {!this.state.isLast ? <Button title={'Suivant'} onPress={() => this._onNext()} /> : <Button title={'Terminer'} onPress={() => this._addpatient()} />} 
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
        fontSize: 22,
        paddingRight:10,
        left:10
      },
      selectedText:
      {
          fontSize: 17
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
      
      }
});