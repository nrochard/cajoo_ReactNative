import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './phone.styles';

import {validatePhone} from './phone.helper';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      isDisabled: true,
      borderColor: 'transparent',
    };
  }
  openCode = () => {
    this.props.navigation.navigate('code', {phone: this.state.number});
  };

  onChangePhone(number) {
    let isDisabled = true;
    this.setState({
      number,
    });
    if (validatePhone(number)) {
      isDisabled = false;
    }
    this.setState({
      isDisabled,
    });
  }
  onFocus() {
    this.setState({
      borderColor: '#FF3637',
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Quel est votre numéro ?</Text>
        <Text style={styles.subtitle}>
          Pour que notre livreur puisse contacter 😄
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputContent, {borderColor: this.state.borderColor}]}
            keyboardType={'phone-pad'}
            type={'normal'}
            onChangeText={text => this.onChangePhone(text)}
            onFocus={() => this.onFocus()}
          />
        </View>
        <Text style={styles.cgv}>
          En cliquant sur "CONTINUER", vous acceptez la{' '}
          <Text style={styles.cgvRed}>Politique de confidentialité</Text>, les{' '}
          <Text style={styles.cgvRed}>CGU</Text> et les{' '}
          <Text style={styles.cgvRed}>CGV</Text> de Cajoo !
        </Text>
        <TouchableOpacity
          style={this.state.isDisabled ? styles.button1Disable : styles.button1}
          onPress={this.state.isDisabled ? null : this.openCode}>
          <Text style={styles.textButton1}>CONTINUER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Phone;
