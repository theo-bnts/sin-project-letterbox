import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

firebase.database (). ref ('letterPresence/value'). on ('value', function (snapshot) { 
  console.log (snapshot.val ()) 
  window.letterPresence = snapshot.val ()
 }); 

firebase.database (). ref ('packagePresence/value'). on ('value', function (snapshot) { 
  console.log (snapshot.val ()) 
  window.packagePresence = snapshot.val ()
 });

export default class Receive extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const pic = {
      lettre: require('./Files/lettre.png'),
      colis: require('./Files/colis.png'),
      nolettre: require('./Files/nolettre.png'),
      nocolis: require('./Files/nocolis.png'),
    };
    let imageLetter;
    let imagePackage;
    
    if (window.letterPresence == true) {
      imageLetter = <Image style={styles.img} source={pic.lettre} />;
    } else {
      imageLetter = <Image style={styles.img} source={pic.nolettre} />;
    }

    if (window.packagePresence == true) {
      imagePackage = <Image style={styles.img2} source={pic.colis} />;
    } else {
      imagePackage = <Image style={styles.img2} source={pic.nocolis} />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dans votre boîte aux lettres</Text>
        <TouchableOpacity
          style={styles.button1} disabled>
          {imageLetter}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2} disabled>
          {imagePackage}
        </TouchableOpacity>
        <Text style={{ margin: 25, }}> </Text>
        <TouchableOpacity
          onPress={() => navigate('Send')}
          style={styles.buttonb}>
          <Text style={styles.bttxt}>ENVOYER DU COURIER OU UN COLIS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Log')}
          style={styles.buttona}>
          <Text style={styles.bttxt}>DECONNEXION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },

  title: {
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif-light',
  },

  img: {
    height: 95,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  img2: {
    height: 110,
    width: 125,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },

  button1: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderRadius: 200,
    alignItems: 'center',
  },

  button2: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 200,
    alignItems: 'center',
  },

  buttonb: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    left: 8,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#FF8900',
  },

  bttxt: {
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  buttona: {
    position: 'absolute',
    top: 35,
    right: 5,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#FF0000',
  },
});