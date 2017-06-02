import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import signUpAPI from '../../api/signUp';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repass: '',
            name: ''
        };
    }

    onSignUp() {
        const { email, password, name } = this.state;
        signUpAPI(email, password, name)
            .then(a => console.log(a));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password, repass, name } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    autoCapitalize="none"
                    value={name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    autoCapitalize="none"
                    secureTextEntry
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter your password"
                    autoCapitalize="none"
                    value={repass}
                    onChangeText={text => this.setState({ repass: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignUp.bind(this)}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


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
