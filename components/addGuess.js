
/*
Kode for å håndtere selve inputten
*/
import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

export default function addGuess({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }


    return (

        <View>
            <TextInput
                placeholder='Gjett'
                onChangeText={changeHandler}
                maxLength={'1'} />

            <Button title='Gjett' onPress={() => submitHandler(text)} />

        </View>
    )
}

