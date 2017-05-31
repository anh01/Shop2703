import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';

import { getInitCategory } from '../../redux/action';
import Menu from './Menu';
import Shop from './Shop/Shop';

class Main extends Component {
    componentDidMount() {
        this.props.getInitCategory();
    }

    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

export default connect(undefined, { getInitCategory })(Main);
