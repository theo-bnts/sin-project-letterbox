import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
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

firebase.database (). ref ('letterForSend/value'). on ('value', function (snapshot) { 
  console.log (snapshot.val ()) 
  window.letterForSend = snapshot.val ()
 }); 

firebase.database (). ref ('packageForSend/value'). on ('value', function (snapshot) { 
  console.log (snapshot.val ()) 
  window.packageForSend = snapshot.val ()
 }); 

export default class Receive extends React.Component {

  render() {

    function reset() {
      firebase.database().ref('letterForSend').set({
        value : false,
      });
      firebase.database().ref('packageForSend').set({
        value : false,
      });
      Alert.alert('Merci. On se charge du reste !');
      navigate('Log');
    }

    const { navigate } = this.props.navigation;

    const pic = {
      lettre: require('./Files/lettre.png'),
      colis: require('./Files/colis.png'),
      nolettre: require('./Files/nolettre.png'),
      nocolis: require('./Files/nocolis.png'),
    };

    let imageLetter;
    let imagePackage;

    if (window.letterForSend == true) {
      imageLetter = <Image style={styles.img} source={pic.lettre} />;
    } else {
      imageLetter = <Image style={styles.img} source={pic.nolettre} />;
    }

    if (window.packageForSend == true) {
      imagePackage = <Image style={styles.img2} source={pic.colis} />;
    } else {
      imagePackage = <Image style={styles.img2} source={pic.nocolis} />;
    }

    return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ marginTop: 55, }}> </Text>
          <Text style={styles.txt}>Amiens</Text>
          <TouchableOpacity style={styles.button1} disabled>
            <Text style={styles.title}>1 rue des roses rouges</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Text style={{ marginRight: 60, }}> </Text>
              {imageLetter}
              <Text style={{ marginRight: 'auto', }}> </Text>
              {imagePackage}
              <Text style={{ marginLeft: 60, }}> </Text>
            </View>
          </TouchableOpacity>
          <Text style={{ margin : 10,}}></Text>
          <Text style={styles.txt}>Autres villes</Text>
          <TouchableOpacity style={styles.button1} disabled>
            <Text style={styles.title}>Autres adresses</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Text style={{ marginRight: 60, }}> </Text>
              <Image style={styles.img} source={pic.nolettre} />
              <Text style={{ marginRight: 'auto', }}> </Text>
              <Image style={styles.img2} source={pic.nocolis} />
              <Text style={{ marginLeft: 60, }}> </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} disabled>
            <Text style={styles.title}>Autres adresses</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Text style={{ marginRight: 60, }}> </Text>
              <Image style={styles.img} source={pic.nolettre} />
              <Text style={{ marginRight: 'auto', }}> </Text>
              <Image style={styles.img2} source={pic.nocolis} />
              <Text style={{ marginLeft: 60, }}> </Text>
            </View>
          </TouchableOpacity>
            <Text style={{margin:250}}></Text>
          </View>
      </ScrollView>
      <View>
        <TouchableOpacity
            onPress={() => reset()}
            style={styles.buttonb}>
            <Text style={styles.bttxt}>TOURNEE TERMINEE</Text>
          </TouchableOpacity>

      <TouchableOpacity
          onPress={() => navigate('Log')}
          style={styles.buttona}>
          <Text style={styles.bttxt}>DECONNEXION</Text>
        </TouchableOpacity>

      </View>
    </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
  },

  txt: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif-light',
  },

  img: {
    height: 35,
    width: 60,
    marginLeft: 10,
    marginTop: 10,
  },

  img2: {
    height: 50,
    width: 60,
    marginLeft: 10,
    marginTop: 10,
  },

  button1: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 200,
  },

  buttonb2: {
    position: 'absolute',
    top: 29,
    right: 0,
    left: 0,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#E3BE08',
    borderRadius: 20,
  },

  bttxt2: {
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  buttonb: {
    position: 'absolute',
    bottom: 10,
    right: 130,
    left: 8,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#18C800',
  },

  bttxt: {
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  buttona: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#FF0000',
  },
});