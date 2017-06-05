import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signIn } from '../../redux/action';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        this.props.signIn(email, password);
        this.props.goBackToMain();
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your email" 
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    secureTextEntry
                    placeholder="Enter your password" 
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(undefined, { signIn })(SignIn);

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});


