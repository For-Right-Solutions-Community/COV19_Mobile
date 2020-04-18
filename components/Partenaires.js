import React, { Component } from "react";
import {ScrollView,StyleSheet,View,Image} from 'react-native';
//import xxx from '../assets/partenaire'

export default class Partenaires extends Component {
    render() {
        return (
    
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Image  style={{
    justifyContent: 'center',
    alignItems: 'center',
  }} source={require('../assets/partenaire/frs.jpg')}/>
                <Image  source={require('../assets/partenaire/medecine.png')}/>
                <Image  source={require('../assets/partenaire/women.png')}/>
                <Image  source={require('../assets/partenaire/samu.png')}/>
                <Image  source={require('../assets/partenaire/moubadra.jpg')}/>
             
            </View>

            </ScrollView >
            );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }
});