import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
/*
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
*/

class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Image source={require('./src/assets/logo.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Vos courses en 3 clics !</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.textButton2}>Découvrir l'app</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    alignItems: 'center',
  },
  logo: {
    //alignSelf:'flex-start',
    width: 200,
    height: 90,
    marginTop: height * 0.36,
  },
  subtitle: {
    paddingTop: 30,
    color: '#494866',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'EricaOne-Regular',
  },
  button1: {
    marginTop: 250,
    backgroundColor: '#ff3637',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  textButton1: {
    color: 'white',
    fontWeight: 'bold',
    // fontFamily: 'Inter-Regular',
  },
  button2: {
    marginTop: 10,
    backgroundColor: 'black',
    width: '90%',
    height: 40,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  textButton2: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#ff3637',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
    /*textAlign: 'center',
    flex:1*/
  },
});

export default App;
