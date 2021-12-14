import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { useState, useEffect } from 'react';
import { hangmanStyles } from '../styles/hangmanStyle';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles,scaffoldImages } from '../styles/global';
import { useTranslation } from 'react-i18next';


//Picks a random word from list
function generateRandomWord(){
    const words = [
        'GLADIATOR',
        'COPYRIGHT',
        'TASER',
        'FATHER',
        'WINE',
        'DOG',
        'FLOWER'

    ]
    var randomword = words[Math.floor(Math.random() * words.length)];
    return randomword;
}

export default function hangman() {


    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        const randWord = generateRandomWord();
        setKeyword(randWord);
    }, []);
    console.log(keyword);
    
    
    const [wrongLetters, setWrongLetters] = useState('');
    const [correctLetters, setCorrectLetters] = useState('');
    const [input, setInput] = useState('');
    const [lives, setLives] = useState(6);
    const [word, setWord] = useState('');
    const [gamestatus, setGamestatus] = useState('');
    const [showInput, setShowInput] = useState(true);

    const {t,i18n} = useTranslation();


    function revealLetters(letter) {
        setWord(word + letter)
        
    }
    function checkwin() {
        if (correctLetters.length + 1 == keyword.length) {
            alert(t("gameTranslations.gamestatusWin"));
            //slår av textinput ved seier
            setShowInput(false);
            
        }
    }
    
    

    return (

        <View style={hangmanStyles.container}>
            {
                /*
                bildene importeres global.js, filnavn+antall liv
                står i motsatt rekkefølge slik når man teller ned liv går man + på hvilket bilde som vises
                */
            }
            <Image style={globalStyles.scaffoldImages} source={(scaffoldImages.scaffoldState[lives+1])} />
            <Text> {t("gameTranslations.lives")} {lives} </Text>
            <Text> {t("gameTranslations.tried")} {wrongLetters.split('').join(' ')} </Text>
            <Text> {t("gameTranslations.correctLetters")} {word} </Text>


            <TextInput
                
                //har ikke fungert på android siden 2019 i følge github
                autoCapitalize={'characters'}
                editable={showInput}
                placeholder={t("gameTranslations.makeGuess")}
                maxLength={1}
                //siden autocapitalize ikke fungerer
                onChangeText={(text) => setInput(text.toUpperCase())}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                    if (wrongLetters.includes(input) || correctLetters.includes(input)) {
                        
                        alert(t("gameTranslations.alert1") + `${input}`)
                        setInput('');
                        //dersom nøkkelordet ikke inkluderer inputbokstaven
                    } else if (keyword.includes(input) == false) {
                        setWrongLetters(wrongLetters + input);
                        //sjekker om man er tom for liv
                        if ((lives - 1) != 0) {
                            setLives(lives-1);
                        } else {
                            setLives(lives-1);
                            alert(t("gameTranslations.gameover"));
                            setGamestatus(t("gameTranslations.gamestatusLoss") + `${keyword}`);
                            setShowInput(false)
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
/*
todo
tegn et tomt brett med _ _ _ _ etc for hver bokstav i nøkkelord
en måte å starte spillet på nytt uten å gå ut og inn
*/

