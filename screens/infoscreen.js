import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Info() {
  
  return (
    <View style={globalStyles.container}>
      
        
      <Text style={globalStyles.paragraph}>
        Hangman is a classic guessing game, where the aim of the game is to guess the hidden word before your man is hung. Every wrong letter is one step closer to the end.</Text>

      <Text style={globalStyles.paragraph}>You are provided with every letter in the alphabet, but a limited number of guesses.
      A good tactic is to try commonly used letters. Be smart, so your character may live : )</Text>
      
      <TouchableOpacity></TouchableOpacity>
    </View>
    
  );
  
}

