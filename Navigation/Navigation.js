import { createStackNavigator } from 'react-navigation';
import Listpatient from '../components/patient/Listpatient';
import Editpatient from '../components/patient/Editpatient';
import IndexFollowScreen from '../components/IndexFollowScreen';
const IndexFollowScreenStackNavigator = createStackNavigator({
    IndexFollowScreen: { 
        screen: IndexFollowScreen,
        navigationOptions: {
          
          headerStyle: {
            backgroundColor: '#4A90E2',
            paddingRight: 10,
            height: 0,
          }
        }
     
      },
    Listpatient: {
        screen: Listpatient,
        navigationOptions: {
          title: 'Liste des patients'
        }
      },
      Editpatient: {
        screen: Editpatient,
        navigationOptions: {
          title: 'Edit patient'
        }
      }
})
export default IndexFollowScreenStackNavigator