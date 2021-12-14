import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useTranslation } from 'react-i18next';

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
  const {t,i18n} = useTranslation();

 
  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.titleText}>{t("maintitle")}</Text>
      <Text>{t("welcome")}</Text>
      <View style={{flex:1, justifyContent:'space-evenly', marginHorizontal:5,alignContent:'space-around',}}>
        <Button title={t("startBtn")} onPress={goToGame}></Button>
        <Button title={t("infoBtn")} onPress={goToInfo}></Button>
        <Button title={t("settingsBtn")} onPress={goToSettings}></Button>
        

      </View>
    </View>
  );
}
