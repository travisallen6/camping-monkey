import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Pokemon from './Pokemon';
import Home from './Home';


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Pokemon: {
      screen: Pokemon,
    },
    // Starwars: {
    //   screen: Starwars,
    // },
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