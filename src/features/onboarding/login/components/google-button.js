import * as React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import styles from '../login.styles';

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.button3}>
      <Image
        source={require('../../../../assets/google-logo.png')}
        style={styles.icon}
      />
      <Text style={styles.textButton2}>Continuer avec Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
