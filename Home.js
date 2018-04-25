import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View>
                <Button
                    title={'Star Wars'}
                    onPress={() => this.props.navigation.navigate('Starwars')}
                />
                <Button
                    title={'Pokemon'}
                    onPress={() => this.props.navigation.navigate('Pokemon')}
                />
            </View>

        )
    }
}