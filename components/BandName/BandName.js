import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios'
import Body from './Body'
import Copyright from "./Copyright"
class BandName extends Component {
  constructor() {
    super();

    this.state = {
      baseUrl: "https://itunes.apple.com/search?term=",
      userInput: "",
      bandName: [],
      data: [],
      taken: false,
      searched: false
    };
    this.findBandName = this.findBandName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  findBandName() {
    axios.get(`${this.state.baseUrl}${this.state.userInput}`).then(res => {
      console.log(res.data);
      let results = res.data.results;
      for (let i = 0; i < results.length; i++) {
        if (
          this.state.userInput.toLowerCase() ===
          results[i].artistName.toLowerCase()
        ) {
          return this.setState({
            taken: true,
            searched: true
          });
        }
      }
    });
  }
  handleChange(value) {
      this.setState({
          userInput: value
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Body userInput = {this.state.userInput} handleChange = {this.handleChange} 
       findBandName={this.findBandName} taken={this.state.taken} searched = {this.state.searched}></Body>
       <Copyright/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default BandName;
