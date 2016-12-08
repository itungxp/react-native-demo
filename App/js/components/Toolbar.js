import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import AppEventEmitter from './AppEventEmitter'
import css from './Style'


class Toolbar extends React.Component {

    open() {
        AppEventEmitter.emit('menu.click');
    }

    render() {
        const self = this;
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={self.open} style={css.iconPadding}>
                    <Icon onPress={self.open} name='view-headline' style={[css.imageIcon, css.iconHome]}/>
                </TouchableOpacity>
                <View style={css.toolbarTitleView}>
                    <Text style={css.toolbarTitle}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

module.exports = Toolbar;
