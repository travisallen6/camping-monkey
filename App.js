import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: "http://http.cat/100"}} style={{width: 200, height: 200}} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
