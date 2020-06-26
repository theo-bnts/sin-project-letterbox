import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Log from './Screens/Log.js';
import Receive from './Screens/Receive.js';
import Send from './Screens/Send.js';
import SendLetter from './Screens/SendLetter.js';
import SendPackage from './Screens/SendPackage.js';
import Postman from './Screens/Postman.js';
import Dashboard from './Screens/Dashboard.js';

const App = createStackNavigator({
    Log: { screen: Log, navigationOptions: { headerShown: false}},
    Receive: { screen: Receive, navigationOptions: { headerShown: false}},
    Send: { screen: Send, navigationOptions: { headerShown: false}},
    SendLetter: { screen: SendLetter, navigationOptions: { headerShown: false}},
    SendPackage: { screen: SendPackage, navigationOptions: { headerShown: false}},
    Postman: { screen: Postman, navigationOptions: { headerShown: false}},
    Dashboard: { screen: Dashboard, navigationOptions : { headerShown: false}},
  },
  {
    initialRouteName: 'Log',
  },
);

export default createAppContainer(App);