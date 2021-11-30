import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  btnContainer:{
    display:'flex',
    flex:1,
    justifyContent:'space-evenly',
    marginVertical: 10,
  },
  textinput:{
    display:'none'
  }

});
//invers verdi til liv
//hadde jeg hatt mere hjernekapasitet hadde jeg bare lagret bildene fra bunnverdien i stedet
export const scaffoldImages = {
  scaffoldState : {
    '1': require('../img/scaffold7.png'),
    '2': require('../img/scaffold6.png'),
    '3': require('../img/scaffold5.png'),
    '4': require('../img/scaffold4.png'),
    '5': require('../img/scaffold3.png'),
    '6': require('../img/scaffold2.png'),
    '7': require('../img/scaffold1.png')
  }
  

}