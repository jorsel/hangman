import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Landing({navigation}) {

  
  const goToInfo = () => {
      navigation.navigate('Info')
  }
  const goToSettings = () =>{
    navigation.navigate('Settings')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Text>Welcome to the hangman game!</Text>
      <Button title='Information' onPress={goToInfo}></Button>
      <Button title='Settings' onPress={goToSettings}></Button>
    </View>
  );
}