import * as React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useState } from 'react';
import { hangmanStyles } from '../styles/hangmanStyle';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles,scaffoldImages } from '../styles/global';
import { set } from 'react-native-reanimated';



export default function hangman() {


    const keyword = 'COPYRIGHT';
    const [wrongLetters, setWrongLetters] = useState('');
    const [correctLetters, setCorrectLetters] = useState('');
    const [input, setInput] = useState('');
    const [lives, setLives] = useState(7);
    const [word, setWord] = useState('');
    const [gamestatus, setGamestatus] = useState('');



    function revealLetters(letter) {
        setWord(word + letter)
    }
    function checkwin() {
        if (correctLetters.length + 1 == keyword.length) {
            alert('You won!')
        }
    }

    return (

        <View style={hangmanStyles.container}>
            <Image style={globalStyles.scaffoldImages} source={(scaffoldImages.scaffoldState[lives+1])} />
            <Text> Current lives: {lives} </Text>
            <Text> You have tried: {wrongLetters.split('').join(' ')} </Text>
            <Text> Keyword: {word} </Text>


            <TextInput
                //har ikke funger på android siden 2019 i følge github
                autoCapitalize={'characters'}
                placeholder='Enter guess'
                maxLength={1}
                //siden autocapitalize ikke fungerer
                onChangeText={(text) => setInput(text.toUpperCase())}
                onSubmitEditing={() => {
                    if (wrongLetters.includes(input) || correctLetters.includes(input)) {
                        alert(`letter ${input} already guessed`);
                        setInput('');
                        //dersom nøkkelordet ikke inkluderer inputbokstaven
                    } else if (keyword.includes(input) == false) {
                        setWrongLetters(wrongLetters + input);
                        //sjekker om man er tom for liv
                        if ((lives - 1) != 0) {
                            setLives(lives-1);
                        } else {
                            setLives(lives-1);
                            alert('Game over!');
                            setGamestatus(`You lost, word was:${keyword}`);
                        }

                        setInput('');

                    } else {
                        //uppercase ser ikke ut til å virke her
                        setCorrectLetters(correctLetters + input)
                        revealLetters(input);
                        checkwin();
                        setInput('');

                    }

                }}
                value={input}
            />
            <Text> {gamestatus} </Text>

        </View>
    )
}
