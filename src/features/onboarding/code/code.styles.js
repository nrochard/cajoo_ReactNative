import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    alignItems: 'center',
    paddingTop: height * 0.25,
    backgroundColor: 'white',
  },
  textButton1: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Inter-Black',
  },
  cgv: {
    textAlign: 'center',
    width: '90%',
    color: '#494866',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: height * 0.0,
  },
  cgvRed: {
    textDecorationLine: 'underline',
    color: '#ff3637',
  },
  title: {
    color: '#494866',
    fontWeight: 'bold',
    fontFamily: 'EricaOne-Regular',
    fontSize: 20,
  },
  subtitle: {
    color: '#494866',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  inputContainer: {
    width: width / 5,
    height: 45,
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  inputContent: {
    flex: 1,
    color: '#494866',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
});

export default styles;
