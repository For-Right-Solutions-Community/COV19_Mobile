import React, { Component} from 'react';
import { TouchableOpacity,StyleSheet} from 'react-native';


import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Button } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Editpatient from './patient/Editpatient';
import Listpatient from './patient/Listpatient';
export default class IndexFollowScreen extends Component {

  constructor(props) {

    super(props)

    this.state = {

      drawerClosed: true,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

 setDrawerState() {
  this.setState({
    drawerClosed: !this.state.drawerClosed,
  });
}

toggleDrawer = () => {
  if (this.state.drawerClosed) {
    this.DRAWER.openDrawer();
  } else {
    this.DRAWER.closeDrawer();
  }
}
render() {
  return (
    <Container>

      <Header hasTabs />
      
      <Tabs initialPage={0} tabBarPosition="top">
        <Tab heading={ <TabHeading><Text>Patients</Text></TabHeading>}> 
        <Grid>
         <Listpatient navigation = {this.props.navigation}>
               </Listpatient>
        </Grid>
        </Tab>
        <Tab heading={ <TabHeading><Text>Suivi</Text></TabHeading>}> 
         <Grid>
          <Editpatient navigation = {this.props.navigation}>
               </Editpatient>
        </Grid>
        </Tab>
 
      </Tabs>
 
    </Container>
);

}
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },    addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
}
})