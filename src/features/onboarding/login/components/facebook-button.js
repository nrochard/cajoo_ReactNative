import * as React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import styles from '../login.styles';

const FacebookButton = () => {
  return (
    <TouchableOpacity style={styles.button2}>
      <Image
        source={require('../../../../assets/facebook.png')}
        style={styles.icon}
      />
      <Text style={styles.textButton1}>Continuer avec Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
