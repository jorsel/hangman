import * as React from 'react';
import { View, Text } from 'react-native';
import { hangmanStyles } from '../styles/hangmanStyle';


export default function hangman (){


    return(
        <View style={hangmanStyles.container}>
            <Text> Guesses </Text>
            <Text id="counter"> 0 </Text>
        </View>
    )
}

