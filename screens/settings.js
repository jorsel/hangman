import React from 'react';
import { View, Text, Button, } from 'react-native';
import { globalStyles } from '../styles/global';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';



export default function Settings() {

  const { t, i18n } = useTranslation();
  
  const setLang = () =>{
    if(i18n.language == 'no'){
      i18n.changeLanguage('en');
    }else{
      i18n.changeLanguage('no');
    }
    
  }

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 16 }}>{t("langbtn")}</Text>
      <Button onPress={() => setLang()} title={t("langbtnTitle")}/>

      {/*
      <Text style={{ fontSize: 16 }}>{t('themebtn')}</Text>
      <Button title={t("themebtnTitle")}></Button>
      */
      }
      
      
    </View>

  )
}




