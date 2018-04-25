import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    text: 'useless placeholder',
    url: 'https://pokeapi.co/api/v2/pokemon/1',
    pokemon: {}
  }

  componentDidMount() {
    axios.get(this.state.url).then(res => this.setState({
      pokemon: res.data,
      sprites: res.data.sprites.front_default
    }))
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: this.state.sprites }}
          style={{ width: 400, height: 400 }}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />


        <Button
          onPress={() => {
            Alert.alert(this.state.pokemon.name);
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
