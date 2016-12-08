import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, Button, FormLabel} from 'react-native-elements'
import Toolbar from './components/Toolbar'
import {Actions} from 'react-native-router-flux'

class Form extends React.Component {

    render() {
        return (
            <View>
                <Toolbar name="Forms"/>
                <View>
                    <Text>Welcome: {this.props.username}</Text>
                </View>
            </View>
        );
    }
}

module.exports = Form;
