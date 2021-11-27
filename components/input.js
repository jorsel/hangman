import React, { useState } from 'react';
import { Text, TextInput, View, Button, FlatView } from 'react-native';
import { hangmanStyles } from '../styles/hangmanStyle';
import AddGuess from './addGuess';
/*
må lagre text som skal endres i state
for at endringene skal kunne oppdateres
*/


const Input = () => {
    const [guessedLetters, setGuessedLetters] = useState([
        { letter: 'a', key: '1' },
        { letter: 'b', key: '2' },
        { letter: 'c', key: '3' },
    ]);
    const [letter, setLetter] = useState('')


    //... spread operator henter innholdet i arrayet
    // vurder å generere nøklene på en bedre måte

    //må kanskje mappe for å sjekke verdier i guessedletters
    const changeHandler = (val) => {
        setGuessedLetters(val)
    }
    const submitHandler = (letter) => {
       
            if (letter == '') {
                alert('You did not guess anything')

            }else if (guessedLetters.values(guessedLetters).in){
                alert(`You already guessed ${letter}! try something else.`)
            
            } else {
                
                console.log(`${letter}`)
                setGuessedLetters(() => {
                    return [
                        
                        { letter: letter, key: Math.random().toString() },
                        ...guessedLetters
                    ]
                })
                console.log(guessedLetters) 
            
        }
            


    }
    return (


        <View style={hangmanStyles.container}>
            <Text>You have guessed:</Text>

            {guessedLetters.map((letter) => {
                return (
                    <View key={letter.key}>
                        <Text>{letter.letter}</Text>
                    </View>
                )
            })}
            <AddGuess submitHandler={submitHandler} />

        </View>
    );
}
export default Input;

