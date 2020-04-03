import { createStackNavigator } from 'react-navigation';
import Listpatient from '../components/patient/Listpatient';
import Editpatient from '../components/patient/Editpatient';
import Suivipatient from '../components/suivi/Suivipatient';
import Authentification from '../Authentification';
import Inscription from '../Inscription';
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
      },
      Suivipatient: {
        screen: Suivipatient,
        navigationOptions: {
          title: 'Suivi patient'
        }
      },
      Authentification: {
        screen: Authentification,
        navigationOptions: {
          title: 'Authentification'
        }
      },
      Inscription: {
        screen: Inscription,
        navigationOptions: {
          title: 'Créer un compte'
        }
      }
})
export default IndexFollowScreenStackNavigator