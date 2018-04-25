import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(){
    super()
    
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: {},
      id: null
    }
  }

  getPokemon() {
    axios.get(`${this.state.url}${this.state.id.toLowerCase()}`).then(res => this.setState({
      pokemon: res.data,
      sprite: res.data.sprites.front_default
    }))
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: this.state.sprite }}
          style={{ width: 400, height: 400 }}
        />

        <Text>{this.state.pokemon.name}</Text>

        <TextInput
          style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(id) => this.setState({ id })}
          value={''}
        />


        <Button
          onPress={() => {
            this.getPokemon(this.state.id);
          }}
          title="Search"
        />

        <Button
          title='Back'
          onPress={() => this.props.navigation.goBack()}
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
