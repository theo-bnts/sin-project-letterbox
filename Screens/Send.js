import * as React from 'react';
import Constants from 'expo-constants';
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Send extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={{margin:15}}></Text>
          <TouchableOpacity
            onPress={() => navigate('SendLetter')}
            style={styles.button1}>
            <Image style={styles.img} source={require('./Files/wlettre.png')} />
          </TouchableOpacity>
          <Text style={styles.txt}>Envoi d'une lettre</Text>
          <TouchableOpacity
            onPress={() => navigate('SendPackage')}
            style={styles.button2}>
            <Image style={styles.img2} source={require('./Files/ocolis.png')} />
          </TouchableOpacity>
          <Text style={styles.txt}>Envoi d'un colis</Text>
        <TouchableOpacity
          onPress={() => navigate('Receive')}
          style={styles.buttonb}>
          <Text style={styles.bttxt}>RETOUR</Text>
        </TouchableOpacity>
        <Text style={{ margin: 25, }}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  img2: {
    height: 95,
    width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  button1: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingTop: 45,
    paddingBottom: 45,
    backgroundColor: '#5DCDEE',
    borderRadius: 200,
    alignItems: 'center',
  },

  button2: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#5DCDEE',
    borderRadius: 200,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  txt: {
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
    fontSize: 26,
    fontFamily: 'sans-serif-light',
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

});
