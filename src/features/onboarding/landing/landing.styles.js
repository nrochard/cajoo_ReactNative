import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 90,
    marginTop: height * 0.36,
  },
  subtitle: {
    paddingTop: 30,
    fontSize: 20,
    color: '#494866',
    fontWeight: 'bold',
    fontFamily: 'EricaOne-Regular',
  },
  button1: {
    marginTop: 250,
    backgroundColor: '#ff3637',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  textButton1: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Inter-Black',
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
    fontFamily: 'Inter-Black',
  },
});

export default styles;
