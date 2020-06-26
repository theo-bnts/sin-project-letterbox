import * as React from 'react';
import Constants from 'expo-constants';
import {Text, View, StyleSheet, TouchableOpacity, Switch, useWindowDimensions} from 'react-native';
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
    window.letterPresence = snapshot.val ()
   }); 
  
firebase.database (). ref ('packagePresence/value'). on ('value', function (snapshot) { 
    window.packagePresence = snapshot.val ()
   });

firebase.database (). ref ('letterForSend/value'). on ('value', function (snapshot) { 
    window.letterForSend = snapshot.val ()
   }); 
  
firebase.database (). ref ('packageForSend/value'). on ('value', function (snapshot) { 
    window.packageForSend = snapshot.val ()
   }); 

export default class Send extends React.Component {
  
    state =
    { 
      switchValuea: window.letterPresence,
      switchValueb: window.packagePresence,
      switchValuec: window.letterForSend,
      switchValued: window.packageForSend 
    };

    toggleSwitcha = valuea => {this.setState({ switchValuea: valuea });};
    toggleSwitchb = valueb => {this.setState({ switchValueb: valueb });};
    toggleSwitchc = valuec => {this.setState({ switchValuec: valuec });};
    toggleSwitchd = valued => {this.setState({ switchValued: valued });};

  render() {
    const { navigate } = this.props.navigation;

    function letterPresenceTrue() {
        firebase.database().ref('letterPresence').set({
          value : true,
        });
      }

    function letterPresenceFalse() {
        firebase.database().ref('letterPresence').set({
          value : false,
        });
      }

    function packagePresenceTrue() {
        firebase.database().ref('packagePresence').set({
          value : true,
        });
      }

    function packagePresenceFalse() {
        firebase.database().ref('packagePresence').set({
          value : false,
        });
      }

    function letterForSendTrue() {
        firebase.database().ref('letterForSend').set({
          value : true,
        });
      }

    function letterForSendFalse() {
        firebase.database().ref('letterForSend').set({
          value : false,
        });
      }

    function packageForSendTrue() {
        firebase.database().ref('packageForSend').set({
          value : true,
        });
      }

    function packageForSendFalse() {
        firebase.database().ref('packageForSend').set({
          value : false,
        });
      }

      this.state.switchValuea ? letterPresenceTrue() : letterPresenceFalse();
      this.state.switchValueb ? packagePresenceTrue() : packagePresenceFalse();
      this.state.switchValuec ? letterForSendTrue() : letterForSendFalse();
      this.state.switchValued ? packageForSendTrue() : packageForSendFalse();

    return (
      <View style={styles.container}>
          <Text style={styles.txt}>Présence de lettres</Text>

            <Switch
            style={styles.switch}
            onValueChange={this.toggleSwitcha}
            value={this.state.switchValuea}
            />

          <Text style={styles.txt}>Présence de colis</Text>
          
          <Switch
            style={styles.switch}
            onValueChange={this.toggleSwitchb}
            value={this.state.switchValueb}
            />

          <Text style={styles.txt}>Envoi de lettres</Text>
          
          <Switch
            style={styles.switch}
            onValueChange={this.toggleSwitchc}
            value={this.state.switchValuec}
            />

          <Text style={styles.txt}>Envoi de colis</Text>
          
          <Switch
          style={styles.switch}
            onValueChange={this.toggleSwitchd}
            value={this.state.switchValued}
            />

        <TouchableOpacity
          onPress={() => navigate('Log')}
          style={styles.buttonb}>
          <Text style={styles.bttxt}>DECONNEXION</Text>
        </TouchableOpacity>
        <Text style={{ margin: 25, }}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  txt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
    fontFamily: 'sans-serif-light',
    marginTop: 50,
  },

  bttxt: {
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  buttonb: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    left: 8,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#FF0000',
  },

  switch: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
  },
});
