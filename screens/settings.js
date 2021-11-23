import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function settings(){

    return(
        <View style={globalStyles.container}>
            <Text>Settings placeholder</Text>
            <Text>Will have settings for language</Text>
            <Text>Optional theme/nightmode</Text>
        </View>
    );
}