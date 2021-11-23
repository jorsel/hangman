import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  btnContainer:{
    display:'flex',
    flex:1,
    justifyContent:'space-evenly',
    marginVertical: 10,
  }

  
  
});
// Light theme colors
export const lightMode = {
  background: '#FFFFFF',
  primary: '#512DA8',
  text: '#121212',
  error: '#D32F2F',
};

// Dark theme colors
export const darkMode = {
  background: '#121212',
  primary: '#B39DDB',
  text: '#FFFFFF',
  error: '#EF9A9A',
};