import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0TLm0XElwpp0UEHO-TsjSBaQhEI3Uy7A",
    authDomain: "letterbox-f5f73.firebaseapp.com",
    databaseURL: "https://letterbox-f5f73.firebaseio.com",
    storageBucket: "letterbox-f5f73.appspot.com",
  };

  if (! firebase.apps.length) { 
    firebase.initializeApp (firebaseConfig); 
}

export default class Send extends React.Component {
  render() {

    function presence() {
      firebase.database().ref('letterForSend').set({
        value : true,
      });
      Alert.alert('Veuillez déposer vos lettres avant 8h.');
      navigate('Receive');
    }

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./Files/icon.png')} />
        <Text style={styles.title}>Confirmation pour l'action</Text>
        <Text style={styles.txta}>Envoi d'une lettre</Text>
        <TouchableOpacity
          onPress={() => presence() }
          style={styles.button1}>
          <Image style={styles.logom} source={require('./Files/yep.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Send')}
          style={styles.button2}>
          <Image style={styles.logom} source={require('./Files/nop.png')} />
        </TouchableOpacity>
        <Text style={{ margin: 50, }}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0,
  },

  txt: {
    color: '#fff',
    fontSize: 20,
  },

  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  title: {
    color: 'grey',
    fontSize: 18,
    fontFamily: 'sans-serif-light',
    position: 'absolute',
    textAlign: 'center',
    bottom: 170,
    right: 0,
    left: 0,
  },

  txta: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'sans-serif-light',
    position: 'absolute',
    textAlign: 'center',
    bottom: 130,
    right: 0,
    left: 0,
  },

  logom: {
    height: 60,
    width: 60,
  },

  button1: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    padding: 20,
    paddingRight: 40,
    paddingLeft: 40,
  },

  button2: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingRight: 40,
    paddingLeft: 40,
  },

});