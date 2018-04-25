import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Pokemon: {
      screen: Pokemon,
    },
    Starwars: {
      screen: Starwars,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}