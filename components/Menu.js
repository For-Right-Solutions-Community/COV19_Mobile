import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet,Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUserToken} from '../Store/actions';

const MENU_APP = [
    { index: 1, name: '  من نحن ؟  ' },
    { index: 2, name: '  المساهمون   ' },
    { index: 3, name: '  خروج   ' }
  ]
 class Menu extends Component {

  ActionItem(item)
  {
    if(item.index==1)
    this.props.navigation.navigate("QuiNous")
    else if(item.index==2)
    this.props.navigation.navigate("Partenaires")
    else if(item.index==3)
    this._signOutAsync();


  }

  _signOutAsync =  () => {
    this.props.removeUserToken()
        .then(() => {
            this.props.navigation.navigate('Auth');
        })
        .catch(error => {
            this.setState({ error })
        })
  };

 
    render() {

        return (
          <View style={styles.wrapper}>
            <ScrollView>
              {MENU_APP.map(item => (
                <TouchableOpacity
                  key={item.index}
                  onPress={() => this.ActionItem(item)
                  }
                >
                  <Text style={styles.listMenu}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      wrapper: {
        //backgroundColor: '#c91f29',
        backgroundColor: '#c91f29',
        marginTop: 50,
    
      },
    
      listMenu: {
        color: 'white', 
        fontSize: 22, 
        paddingLeft: 20, 
        paddingTop: 12,
        paddingBottom: 12,
      }
    
    });
    function mapDispatchToProps(dispatch) {
      return bindActionCreators({
        removeUserToken:removeUserToken
      }, dispatch);
    }
    function mapStateToProps(state) {
      return {
        token: state.token,
        patientslist:state.patientslist
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Menu);