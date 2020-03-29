import React , { Component } from "react";
import {
  FlatList,
  Text,

  View,
  ActivityIndicator,
  Button,
  StyleSheet,
  SearchBar,
  RefreshControl,
  TouchableOpacity
} from "react-native";

import PatientRow from "./PatientRow";
import datapatient from './Helpers'

class ListPatient extends Component {
  constructor(props)
{
  super(props)
  this.state = ({
    deletedRowKey: null,   
    refreshing:false,
            
});
}
 _renderItem = ({ item }) => (


<PatientRow
firstName={item.firstName}
 lastName={item.lastName}
 age={item.age}
 tel={item.tel}
 list={item}
 navigation={ this.props.navigation}
/>

);
 _renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
);
 _renderHeader = () => (
   
  <View
    style={{ height: 30, justifyContent: "center" }}
  >

  </View>

 
);

 _renderFooter = (isFetching, hasMoreResult, loadMore) => {
  if (isFetching) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color="#4fc3f7"
        style={{ marginBottom: 12 }}
      />
    );
  }
  if (hasMoreResult) {
    return <Button color="#4fc3f7" title="Afficher plus" onPress={loadMore} />;
  }

  return null;
};
 _renderEmpty = () => (
  <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
    <Text>Aucun résultat</Text>
  </View>
);
_renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
);
fetchdata=async()=>
{
  this.props.loadItemcaisse();
}
_onRefresh()
{
  this.setState({refreshing:true})
  this.fetchdata().then(()=>{this.setState({refreshing:false})});
  
}
componentDidMount() {
  console.log(datapatient[0].firstName);
}

_Editpatient= () => {
  this.props.navigation.navigate("Editpatient",{mode:'INSERT'})
}

render() {
  if (! datapatient) {
    return (
      <ActivityIndicator style={styles.container} animating={true} />
    );
  }

  else {
    return (
      <View>
    <FlatList
  data={datapatient}
  keyExtractor={(item) => item.firstName}
  renderItem={( item ) => this._renderItem(item)}/>

 
 <TouchableOpacity  style={styles.addButton}  onPress={() => this._Editpatient()}>
           <Text style={styles.addButtonText}>+</Text>
           </TouchableOpacity>

      </View>
   );
  }

 }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    alignItems: 'center'
  },
  textContent: {
    fontSize: 25,

  } ,
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 40,
    bottom: 15,
    backgroundColor: '#2196F3',
    width: 50,
    height: 50,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
},
});
export default ListPatient;
