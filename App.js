/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer , createStackNavigator} from 'react-navigation';
import MainScreen from './components/MainScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
  },
});

export default createAppContainer(AppNavigator);