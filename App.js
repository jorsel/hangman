import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Navigator from "./routes/homeStack";

/*
App hovedområde
*/
const App = () => {
  return (
    
      <Navigator/>
    
      
    
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

