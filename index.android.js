import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App/js/App'

export default class ReactNativeDemo extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
