import React from 'react';
import { View, Text, Button, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Landing({navigation}) {

  //navigation methods
  const goToInfo = () => {
      navigation.navigate('Info')
  }
  const goToSettings = () =>{
    navigation.navigate('Settings')
  }
  const goToGame = () =>{
    navigation.navigate('Hangman')
  }
 
  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.titleText}>Main Menu</Text>
      <Text>Welcome to the hangman game!</Text>
      <View style={{flex:1, justifyContent:'space-evenly', marginHorizontal:5,alignContent:'space-around',}}>
        <Button title='Start game' onPress={goToGame}></Button>
        <Button title='Information' onPress={goToInfo}></Button>
        <Button title='Settings' onPress={goToSettings}></Button>
       
      </View>
      

    </View>
  );
}
