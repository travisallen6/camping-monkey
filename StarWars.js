import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class StarWars extends React.Component {
  constructor(){
    super()
    
    this.state = {
        name: '',
        gender: '',
        haircolor: '',
        id: null
    }
  }

  getPerson(personId) {
    axios.get(`https://swapi.co/api/people/${personId}`)
    .then(res => this.setState({
        name: res.data.name,
        gender: res.data.gender,
        haircolor: res.data.hair_color
    }))
  }

  render(){
      return(
          <View style={styles.container}>
               <Text>Name: {this.state.name}</Text>
               <Text>Gender: {this.state.gender}</Text>
               <Text>Hair Color: {this.state.haircolor}</Text>

                <TextInput
                    style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(id) => this.setState({ id })}
                    value={this.state.id}
                />

                <Button
                    onPress={() => {
                        this.getPerson(this.state.id);
                    }}
                    title="Search for Starwars People"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                    title="Go Back"
                />

          </View>
      )
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
