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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _getToken,_deconnection} from '../../Store/actions';
//import datapatient from './Helpers'

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
idpatient={item.id}
firstname={item.firstname}
lastname={item.lastname}
 age={item.age}
 phone={item.phone}
 patient={item}
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

}

_Editpatient= () => {
  this.props.navigation.navigate("Editpatient",{mode:'INSERT'})
}

render() {
  if (! this.props.patientslist.patientslist) {
    return (
      <ActivityIndicator style={styles.container} animating={true} />
    );
  }

  else {
    return (
      <View>
    <FlatList
  data={this.props.patientslist.patientslist}
  keyExtractor={(item) => ""+item.id}
  renderItem={( item ) => this._renderItem(item)}/>

 
 <TouchableOpacity  style={styles.addButton}  onPress={() => this._Editpatient()}>
           <Text style={styles.addButtonText}>إضافة مريض</Text>
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
    backgroundColor: '#F0493E',
    width: 100,
    height: 100,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
},
addButtonText: {
  fontSize: 24,
  paddingRight:30,
  left:10,
  color:'white'
}
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _getToken: _getToken,
    _deconnection:_deconnection
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    token: state.token,
    patientslist:state.patientslist
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListPatient);