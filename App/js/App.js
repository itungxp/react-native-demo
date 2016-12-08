import React from 'react'
import {View, StyleSheet} from 'react-native'
import {SideMenu, List, ListItem, Icon} from 'react-native-elements'
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux'
import AppEventEmitter from './components/AppEventEmitter'
import Login from './Login'
import Form from './Form'
import ListView from './Form'
import Card from './Form'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {toggled: false}
    }

    toggleSideMenu() {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    componentDidMount() {
        AppEventEmitter.addListener('menu.click', () => this.toggleSideMenu());
    }

    render() {
        const list = [
            {title: 'Form', icon: 'content-paste', action: Actions.form},
            {title: 'List', icon: 'list', action: Actions.list},
            {title: 'Cards', icon: 'business', action: Actions.card},
            {title: 'Logout', icon: 'person', action: Actions.login}];
        // SideMenu takes a React Native element as a prop for the actual Side Menu
        const MenuComponent = (
            <View style={{flex: 1, backgroundColor: '#ededed', justifyContent: 'center'}}>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                onPress={() =>{ item.action(); this.toggleSideMenu();} }
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                            />
                        ))
                    }
                </List>
            </View>
        );

        const scenes = Actions.create(
            <Scene key="root">
                <Scene key="login" component={Login} title="Login" type={ActionConst.RESET}/>
                <Scene key="form" component={Form} title="Form" type={ActionConst.RESET}/>
                <Scene key="list" component={ListView} title="List View" type={ActionConst.RESET}/>
                <Scene key="card" component={Card} title="Card" type={ActionConst.RESET}/>
            </Scene>
        );


        return (
            <SideMenu
                menuPosition="left"
                MenuComponent={MenuComponent}
                toggled={this.state.toggled}>
                    <Router hideNavBar={true} scenes={scenes} />
            </SideMenu>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    }
});

module.exports = App;
