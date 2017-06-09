import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import { connect } from 'react-redux';
import backSpecial from '../../media/appIcon/backs.png';
import { changeInfo } from '../../redux/action';

class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { name, address, phone } = this.props.user;
        this.state = {
            txtName: name,
            txtAddress: address,
            txtPhone: phone
        };
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    updateInfo() {
        const { txtName, txtAddress, txtPhone } = this.state;
        this.props.changeInfo(txtName, txtPhone, txtAddress, () => console.log('XONG'));
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { name, address, phone } = this.props.user;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        defaultValue={name}
                        onChangeText={txtName => this.setState({ txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        defaultValue={address}
                        onChangeText={txtAddress => this.setState({ txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        defaultValue={phone}
                        onChangeText={txtPhone => this.setState({ txtPhone })}
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.updateInfo.bind(this)}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(mapStateToProps, { changeInfo })(ChangeInfo);
