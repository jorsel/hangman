import React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { useTranslation } from 'react-i18next';


export default function Info() {

  const {t,i18n} = useTranslation();
  
  return (
    <View style={globalStyles.container}>
      
        
      <Text style={globalStyles.paragraph}>
        {t("desc1")}
      </Text>
      
      <Text style={globalStyles.paragraph}>
        {t("desc2")}
        </Text>
      
      <TouchableOpacity></TouchableOpacity>
    </View>
    
  );
  
}

