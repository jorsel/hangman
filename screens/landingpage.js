import React from 'react';
import Text from 'react-native';


const Greeting = (props) => {
    return (
      <View style={styles.center}>
        <Text>Hello {props.greetingtext}!</Text>
      </View>
    );
  }

  const LotsOfGreetings = () => {
    return (
      <View style={[styles.center, {top: 50}]}>
        <Greeting greetingtext='Welcome to the hangman app!' />
        
      </View>
    );
  }
  