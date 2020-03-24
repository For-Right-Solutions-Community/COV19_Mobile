import React, { Component } from "react";
import {
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity,
    Alert,
    TouchableHighlight,
    Modal,
    Button
  } from "react-native";
  import {Text,View,Input,Item,Icon,Textarea,DatePicker,Picker} from 'native-base';
  import { RadioGroup } from 'react-native-btr';
  export const IMAGE_HEIGHT = window.width / 7;
  const br = `\n`;
  class Step7 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          radioButtons: [
            {
              label: 'Oui',
              value: 'Oui',
              checked: false,
              color: 'black',
              disabled: false,
              flexDirection: 'row',
              size: 13
    
            },
    
            {
              label: 'Non',
              value: 'Non',
              checked: false,
              color: 'black',
              disabled: false,
              flexDirection: 'row',
              size: 13
    
            }
    
         
    
          ]
        });
      
    }
    onPress = data => this.setState({ data });
    render() {
      let selectedItem = this.state.radioButtons.find(e => e.checked == true);
      selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;
        return (
          <View>
          <View style={{ flex: 1}}>
           </View>  
          <View style={{ flex: 3}}>
              <Text style={styles.textlabel}> Était-il (elle) en contact avec une personne qui revient d’un voyage ?   {br} {br}</Text> 
              <RadioGroup
          color='#0277BD'
          labelStyle={{ fontSize: 26, fontWeight:"bold", }}
          radioButtons={this.state.radioButtons}
          onPress={radioButtons => this.setState({ radioButtons })}
          style={{ paddingTop: 20 }}
        />
 
          </View>  
          
          </View>   

        );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
    },

    textlabel: {
      fontSize: 22,
      color:"#3f51b5",
      fontWeight:"bold",
      paddingRight:10,
      left:10
    },
    textoption: {
      fontSize: 14,
      color:"gray",
      left:10,
    
    },

    MainContainer: {
      flex: 1,
      backgroundColor: '#FFF8E1',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  
    },
  
    selectedItemView:
      {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: 14,
          backgroundColor: '#263238',
          justifyContent: 'center',
          alignItems: 'center'
      },
   
      selectedText:
      {
          fontSize: 17,
          color: '#fff'
      }
  
  });
  export default Step7;