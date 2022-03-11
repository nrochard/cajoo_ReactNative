import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './login.styles';

import FacebookButton from './components/facebook-button';
import GoogleButton from './components/google-button';
import PhoneButton from './components/phone-button';

class Login extends React.Component {
  openPhone = () => {
    this.props.navigation.navigate('phone');
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.subtitle}>Connectez vous simplement !</Text>
        <FacebookButton />
        <GoogleButton />
        <PhoneButton openPhone={this.openPhone} />
      </View>
    );
  }
}

export default Login;
