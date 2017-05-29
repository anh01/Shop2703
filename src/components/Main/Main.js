import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';

import { initProductType } from '../../redux/action';
import Menu from './Menu';
import Shop from './Shop/Shop';

class Main extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'INIT_PRODUCT_TYPE',
            arrayType: [1, 3, 4]
        });
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

function mapActionToProps() {
    return { initProductType };
}

export default connect()(Main);
