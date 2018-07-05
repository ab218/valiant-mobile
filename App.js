import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import React      from 'react';
import HomeIndex  from './src/home/index.js'
import Options    from './src/roadside_assistance/Options.js'
import Report  from './src/roadside_assistance/start_report/Index.js'
import Camera     from './src/roadside_assistance/start_report/Camera.js'
import Form       from './src/roadside_assistance/start_report/Form.js'

const navigateAction = NavigationActions.navigate({
  routeName: 'options',
  action: NavigationActions.navigate({ routeName: 'options' }),
});

const App = createStackNavigator({
  Home:    { 
    screen: HomeIndex,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  options: { screen: Options },
  report:  { screen: Report },
  camera:  { screen: Camera },
  form:    { screen: Form }
});

export default App