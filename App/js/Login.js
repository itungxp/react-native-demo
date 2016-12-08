import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import css from './components/Style'
import {FormLabel, FormInput, Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Name</FormLabel>
                <FormInput placeholder="Username or email" onChangeText={(text) => this.setState({username: text})}/>
                <FormLabel>Password</FormLabel>
                <FormInput placeholder="Password" secureTextEntry={true}/>
                <Button title="Login"
                        onPress={() => Actions.form({username: this.state.username})}
                        buttonStyle={css.loginBtn} backgroundColor="#2196F3"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

module.exports = Login;
