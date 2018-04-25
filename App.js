import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Pokemon from './Pokemon'

export default class App extends Component {
  constructor() {
    super()
    
  }

  render() {
    return(
      <Pokemon/>
    )
  }
}