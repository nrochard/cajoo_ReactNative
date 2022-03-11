import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
      height: height,
      width,
      alignItems: 'center',
      marginTop: height * 0.25,
    },
    icon: {
      width: 20,
      height: 20,
      position: 'absolute',
      left: 50,
    },
    subtitle: {
      paddingTop: 30,
      color: '#494866',
      fontWeight: 'bold',
      fontFamily: 'EricaOne-Regular',
      fontSize: 20,
    },
    button1: {
      marginTop: 10,
      backgroundColor: '#ff3637',
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 10,
    },
    button2: {
      marginTop: 30,
      backgroundColor: '#4267B2',
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexDirection: 'row',
      borderRadius: 10,
    },
    button3: {
      marginTop: 10,
      backgroundColor: 'transparent',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexDirection: 'row',
    },
    textButton1: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Inter-Black',
    },
    textButton2: {
      color: 'black',
      fontWeight: 'bold',
    },
  });

  export default styles;