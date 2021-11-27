import * as React from 'react';
import { View, Text } from 'react-native';
import {  TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import { hangmanStyles } from '../styles/hangmanStyle';


export default function hangman (){

    var lives = 3;

    const [newGuess, setNewGuess] = useState();
    const [guesses, setGuesses] = (useState([]))

    const handleGuess = () =>{
        setGuesses([...guesses, newGuess])
        setNewGuess(null)
    }
    
   
    return(
        <View style={hangmanStyles.container}>
            
            {
                guesses.map((newGuess, index) => {
                    
                })
            }
            <Text> You currently have {lives} lives left! </Text>
            
            <TextInput  placeholder={'Gjett noe'} value={newGuess} onChangeText={text => setGuesses(text)} />
            <TouchableOpacity onPress={() => handleGuess()}></TouchableOpacity>
        </View>
    )
}
