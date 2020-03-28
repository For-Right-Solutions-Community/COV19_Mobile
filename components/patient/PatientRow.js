import React, { Component } from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
export default class UserRow extends Component {
  constructor(props)
{
  super(props)
}

render() {

  return (
  <TouchableOpacity style={styles.main_container}  onPress={() => this.props.onListPressed(this.props.list)}>
  <View style={styles.row}>
  
    <View>
    <Text style={styles.secondaryText}>{this.props.familletiers}</Text>
      <Text style={styles.primaryText}>
      
        {`${this.props.firstName} ${this.props.lastName}`}
      </Text>
      <Text style={styles.secondaryText}>
        age :{this.props.age}
      </Text>
      <Text style={styles.secondaryText}>tel :{this.props.tel}</Text>
    </View>
  </View>
  </TouchableOpacity>
   );
}
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12
  },
  picture: {
    width: 36,
    height: 36,
    borderRadius: 25,
    marginRight: 18
  },
  montantText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    marginBottom: 4,
    textAlign:"left"


  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    marginBottom: 4
  },
  secondaryText: {
    color: "grey",
    fontSize: 16,
  }
});
