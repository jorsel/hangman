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
    flex: 1,
    padding: 20,
  },

  
  
});

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