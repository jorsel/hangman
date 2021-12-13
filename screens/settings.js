import React from 'react';
import { View, Text, Button, } from 'react-native';
import { globalStyles } from '../styles/global';
import { useTranslation } from 'react-i18next';


export default function Settings() {

  const {t,i18n} = useTranslation();

  return (
    <View style={globalStyles.container}>
        <Text style={{fontSize:16}}>{t("langbtn")}</Text>
        <Button title={t("langbtnTitle")} />

        <Text style={{fontSize:16}}>{t('themebtn')}</Text>
        <Button title={t("themebtnTitle")}></Button>
    </View>
  )
}

function changelang(){
  
}



