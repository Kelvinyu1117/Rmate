import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './homeScreen';
import ProfileScreen from '../profileScreen/profileScreen';
import PeopleScreen from '../peopleScreen/peopleScreen';
import SpaceeScreen from '../spaceScreen/spaceScreen';
import ConnectScreen from '../connectScreen/connectScreen';

const homeScreenNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Space:{
            screen: SpaceeScreen
        },
        People: {
            screen: PeopleScreen
        },
        Connect:{
            screen: ConnectScreen
        },
        Profile: {
            screen: ProfileScreen
        },
    },
    {
        initialRouteName: 'Home',
        drawerPostion: 'left'
    }
)

export default homeScreenNavigator;