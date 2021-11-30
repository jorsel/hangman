import React from 'react';
import { View, Text, Button, } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Settings() {



  return (
    <View style={globalStyles.container}>
        <Text style={{fontSize:16}}>Change Theme</Text>
        <Button title='Change theme' />

        <Text style={{fontSize:16}}>Change Language</Text>
        <Button title='Change language'></Button>
    </View>
  )
}



