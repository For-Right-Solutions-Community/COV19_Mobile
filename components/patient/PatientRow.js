import React, { Component } from "react";
import { StyleSheet, View,Text,TouchableOpacity, TextInput, Button } from "react-native";  
const Suivi="     Suivi     "
export default class UserRow extends Component {
  constructor(props)
{
  super(props)
}
_suivipatient= () => {
  this.props.navigation.navigate("Suivipatient",{mode:'INSERT'})
}

render() {  
  return (  
      <View style={styles.container}>  
          <View style={styles.innerContainer}>  
          <Text style={styles.primaryText}>
      
      {`${this.props.firstName} ${this.props.lastName}`}
    </Text>

               <TouchableOpacity  style={styles.suivibutton}  onPress={() => this._suivipatient()}>
           <Text style={styles.suivibutton}>{      Suivi    } </Text>
           </TouchableOpacity>
          </View>  

             <View>

      <Text style={styles.secondaryText}>
        age :{this.props.age}
      </Text>
      <Text style={styles.secondaryText}>tel :{this.props.tel}</Text>
    </View>
      </View>  
  );  
} 
}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      padding: 26,  
      backgroundColor: "#fff",  
      justifyContent: "flex-start"  
  },  
  innerContainer:{  
     // flex: 1,  
      width: "100%",  
      flexDirection: "row",  
      justifyContent: "space-between",  
      alignItems: "center"  
  },  
  textStyle:{  
      width: "70%",  
      backgroundColor: "gray",  
  },  
  buttonStyle:{  
      width: "30%",  
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: 4
  },
  secondaryText: {
    color: "grey",
    fontSize: 16,
  },  
  suivibutton: {
    backgroundColor: '#96C85B',
    fontSize: 20,
    fontWeight: "bold",
    color:'white'
  }  
});  
