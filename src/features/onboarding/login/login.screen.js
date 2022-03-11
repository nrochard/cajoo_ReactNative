import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './login.styles';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.subtitle}>Connectez vous simplement !</Text>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require('../../../assets/facebook.png')}
            style={styles.icon}
          />
          <Text style={styles.textButton1}>Continuer avec Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Image
            source={require('../../../assets/google-logo.png')}
            style={styles.icon}
          />
          <Text style={styles.textButton2}>Continuer avec Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={require('../../../assets/numero-logo.png')}
            style={styles.icon}
          />
          <Text style={styles.textButton1}>Avec votre numéro !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
