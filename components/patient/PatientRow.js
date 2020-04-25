import React, { Component } from "react";
import { StyleSheet, View,Text,TouchableOpacity, TextInput, Button } from "react-native";  
const Suivi=" + متابعة الحالة  "
export default class UserRow extends Component {
  constructor(props)
{
  super(props)
}
_suivipatient= () => {
  this.props.navigation.navigate("Suivipatient",{mode:'INSERT',patient:this.props.patient})
}

render() {  
  //console.log("list   "+JSON.stringify(this.props.list));
  return (  
      <View style={styles.container}>  
         
          <Text style={styles.primaryText}>
      
           {`${this.props.firstname} ${this.props.lastname}`}
    </Text>
             <View>
 <View style={styles.innerContainer}>  
 <TouchableOpacity  style={styles.suivibutton}  onPress={() => this._suivipatient()}>
           <Text style={styles.suivibutton}>{      Suivi    } </Text>
           </TouchableOpacity>
      <Text style={styles.secondaryText}>
      العمر :{this.props.age}
      </Text>
   
        
      </View>  
      <Text style={styles.secondaryText}>الهاتف :{this.props.phone}</Text>
      <Text style={styles.messageText}> {this.props.message}</Text>
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
    fontSize: 20,
  }, 
  messageText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }, 
  suivibutton: {
    backgroundColor: '#bdbdbd',
    fontSize: 22,
    fontWeight: "bold",
    color:'white'
 
  }  
});  
