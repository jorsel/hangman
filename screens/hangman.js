import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { hangmanStyles } from '../styles/hangmanStyle';

const alfabet = ['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u','v','w','x',
'y','z','æ','ø','å'];

function fillList(){
    for(i = 0; i < alfabet.length;i++){
        
    }
}

export default function hangman (){

    var lives = 3;
    //need to generate word
    var word = 'gladiator';


    return(
        <View style={hangmanStyles.container}>

            <Text> You currently have {lives} lives left! </Text>

            <ScrollView horizontal='true'>
                <Text style={{fontSize:42}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </ScrollView>
            
            
        </View>
    )
}
/*

var bokstaver = function(){
    button =
}
*/
