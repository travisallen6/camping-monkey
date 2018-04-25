import React from 'react';
import { StyleSheet, Text, View defaul, Image, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';

export default class App extends React.Component
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: "http://http.cat/100"}} style={{width: 200, height: 200}} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
 {
  constructor(){
    super()
    this.state = {

    render() {
    return (
ew style  <Imag=tyles.contaier}>
 s   e source={{uri:/10http://htt0"}cat  
omponent {
    render() {
    return (
      <View style=
    }
iew style={styles.container}>
        <Image source={{uri: "http://http.cat/100"}iew style={styles.container}>
      <Image source={{uri: "http://http.cat/100"}} style={{width: 200, height: 200}} />
    <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
yles.container}>
        <Image source={{uri: "http://http.cat/100"}} style={{width: 200, height: 200}} />
        <Text>Type a Pokemon ID Below to Get Data</Text>
        <Card></Card>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
