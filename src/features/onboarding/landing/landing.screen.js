import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './landing.styles';

class Landing extends React.Component {
  openLogin = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <View style={styles.main}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Vos courses en 3 clics !</Text>
        <TouchableOpacity style={styles.button1} onPress={this.openLogin}>
          <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.textButton2}>Découvrir l'app</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Landing;
