import * as React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import styles from '../login.styles';

const PhoneButton = ({openPhone}) => {
  return (
    <TouchableOpacity style={styles.button1} onPress={openPhone}>
      <Image
        source={require('../../../../assets/numero-logo.png')}
        style={styles.icon}
      />
      <Text style={styles.textButton1}>Avec votre numéro !</Text>
    </TouchableOpacity>
  );
};

export default PhoneButton;
