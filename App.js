import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

/*
App hovedområde
*/
const App = () => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.header}
      >Hangman hjemmeside</Text>

      <Text style={styles.text}>Some more text</Text>
    </View>
  );
}

/*
stil-innstillinger
*/
var styles = StyleSheet.create({
  header:{
    fontSize:24,
    textAlign: 'center',
  },
  container:{
    backgroundColor:'#32a875',
  },
  text:{
    textAlign:'center',
  }
})
export default App;

