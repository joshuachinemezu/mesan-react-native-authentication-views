/**
 * Created by mosesesan on 01/09/2017.
 */

'use strict';

import React, {Component} from 'react';
var {View, Text, TouchableOpacity, TextInput, ActivityIndicator} = require('react-native');

import styles from '../styles/index'
import auth_styles from '../styles/auth'

export class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[
                    (this.props.social) ? styles.socialButton : styles.logInButton,
                    (this.props.style) && this.props.style]}>
                    <Text style={[styles.buttonText]}>
                        {this.props.btnText}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export class ButtonWithLoader extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.logInButton, (this.props.style) && this.props.style]}>
                    {
                        (!this.props.showLoader) ?
                            <Text style={[styles.buttonText]}>{this.props.btnText}</Text>
                            :
                            <ActivityIndicator
                                animating={true}
                                color="#fff"
                                style={[{height: 24}]}
                                size="small"
                            />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

export class AuthTextInput extends Component {
    render() {
        return (
            <View style={{borderWidth: 0, marginBottom: 15}}>
                <View style={auth_styles.inputContainer}>
                    <TextInput
                        onChangeText={this.props.onChangeText}
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        style={[auth_styles.textInput, {}]}
                        value={this.props.value}
                        secureTextEntry={this.props.secureTextEntry}
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                    />
                </View>
                {
                    (this.props.error.length > 0 ) &&
                    <Text style={[auth_styles.errorText]}>{this.props.error}</Text>
                }
            </View>
        );
    }
}

export class PhoneTextInput extends Component {
    render() {
        return (
            <View style={[auth_styles.inputContainer, {flex:1, marginLeft:5}]}>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    autoFocus={this.props.autoFocus}
                    style={[ {flex:1, textAlign:"center"}]}
                    value={this.props.value}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    keyboardType='phone-pad'
                />
            </View>
        );
    }
}

// {borderRightWidth:1, borderRightColor:"#d73840"}