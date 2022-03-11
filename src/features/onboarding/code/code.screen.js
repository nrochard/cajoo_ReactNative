import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './code.styles';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      isDisabled: true,
      borderColor1: 'transparent',
      borderColor2: 'transparent',
      borderColor3: 'transparent',
      borderColor4: 'transparent',
    };
  }

  // onChangePhone(number) {
  //   let isDisabled = true;
  //   this.setState({
  //     number,
  //   });
  //   if (number.length === 10) {
  //     isDisabled = false;
  //   }
  //   this.setState({
  //     isDisabled,
  //   });
  // }
  onFocus() {
    this.setState({
      borderColor1: '#FF3637',
      borderColor2: 'transparent',
      borderColor3: 'transparent',
      borderColor4: 'transparent',
    });
  }

  onFocus2() {
    this.setState({
      borderColor1: 'transparent',
      borderColor2: '#FF3637',
      borderColor3: 'transparent',
      borderColor4: 'transparent',
    });
  }

  onFocus3() {
    this.setState({
      borderColor1: 'transparent',
      borderColor2: 'transparent',
      borderColor3: '#FF3637',
      borderColor4: 'transparent',
    });
  }

  onFocus4() {
    this.setState({
      borderColor1: 'transparent',
      borderColor2: 'transparent',
      borderColor3: 'transparent',
      borderColor4: '#FF3637',
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Confirmez votre numéro !</Text>
        <Text style={styles.subtitle}>
          Entrez le code envoyé sur votr numéro
        </Text>
        <View style={styles.codeContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputContent,
                {borderColor: this.state.borderColor1},
              ]}
              keyboardType={'phone-pad'}
              type={'normal'}
              onFocus={() => this.onFocus()}
              onPress={this.state.isDisabled ? null : this.openCode}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputContent,
                {borderColor: this.state.borderColor2},
              ]}
              keyboardType={'phone-pad'}
              type={'normal'}
              onFocus={() => this.onFocus2()}
              onPress={this.state.isDisabled ? null : this.openCode}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputContent,
                {borderColor: this.state.borderColor3},
              ]}
              keyboardType={'phone-pad'}
              type={'normal'}
              onFocus={() => this.onFocus3()}
              onPress={this.state.isDisabled ? null : this.openCode}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputContent,
                {borderColor: this.state.borderColor4},
              ]}
              keyboardType={'phone-pad'}
              type={'normal'}
              onFocus={() => this.onFocus4()}
              onPress={this.state.isDisabled ? null : this.openCode}
            />
          </View>
        </View>
        <Text style={styles.cgv}>
          Vous n'avez pas reçu le code ?{' '}
          <Text style={styles.cgvRed}>Renvoyer</Text>
        </Text>
      </View>
    );
  }
}

export default Phone;
