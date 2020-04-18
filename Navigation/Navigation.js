import { createStackNavigator } from 'react-navigation';
import Listpatient from '../components/patient/Listpatient';
import Editpatient from '../components/patient/Editpatient';
import Suivipatient from '../components/suivi/Suivipatient';
import Authentification from '../Authentification';
import Inscription from '../Inscription';
import IndexFollowScreen from '../components/IndexFollowScreen';
import QuiNous from '../components/QuiNous';
import Partenaires from '../components/Partenaires';
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
      QuiNous: {
        screen: QuiNous,
        navigationOptions: {
          title: 'من نحن ؟ '
        }
      },
      Partenaires: {
        screen: Partenaires,
        navigationOptions: {
          title: '  المساهمون'
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
          title: 'إضافة مريض'
        }
      },
      Suivipatient: {
        screen: Suivipatient,
        navigationOptions: {
          title: 'متابعة الحالة المريض'
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
          title: 'إنشاء حساب'
        }
      }
})
export default IndexFollowScreenStackNavigator