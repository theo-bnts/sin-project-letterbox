import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, Image} from 'react-native';

export default class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', mdp: ''};
  }

  render() {
    const { navigate } = this.props.navigation;
    var id = this.state.id;
    var mdp = this.state.mdp;

    function check() {
      if (id == 'User' && mdp == 'Admin') {
          navigate('Receive')
      }
      if (id == 'Postman' && mdp == 'Admin') {
          navigate('Postman')
      }
      if (id == 'Admin' && mdp == 'Admin') {
        navigate('Dashboard')
    }
      if ((id != 'Postman' || mdp != 'Admin') && ( id != 'User' || mdp != 'Admin') && ( id != 'Admin' || mdp != 'Admin')) {
        Alert.alert('Identifiant ou mot de passe incorrect.')
      }
    }

    return (
      <View style={styles.container}>
        <Text style={{margin: 30}}> </Text>
        <Text style={styles.text}>Identifiant</Text>
          <View style={styles.section}>
            <Image style={styles.img} source={require('./Files/idcone.png')} />
            <TextInput
              style={styles.input}
              placeholder="Admin ou User ou Postman     "
              onChangeText={(id) => this.setState({id})}
              placeholderTextColor='grey'
              value={this.state.id}
              returnKeyType = { "next" }
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              blurOnSubmit={false}
            />
          </View>
          <Text style={styles.text}>Mot de passe</Text>
          <View style={styles.section}>
            <Image style={styles.img} source={require('./Files/mdpcone.png')} />
            <TextInput
              style={styles.input}
              onChangeText={(mdp) => this.setState({mdp})}
              placeholder="Admin                                                  "
              placeholderTextColor='grey'
              value={this.state.mdp}
              secureTextEntry={true}
              ref={(input) => { this.secondTextInput = input; }}
            />
          </View>
          <TouchableOpacity
          onPress={() => check()}
          style={styles.buttonb}>
          <Text style={styles.bttxt}>CONNEXION</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>Pas le temps ?</Text>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop: 'auto'}}>
            <TouchableOpacity
                onPress={() => navigate('Receive')}
                style={styles.button}>
                <Text style={styles.bttxt}>   USER   </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('Postman')}
                style={styles.button}>
                <Text style={styles.bttxt}>POSTMAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('Dashboard')}
                style={styles.button}>
                <Text style={styles.bttxt}>  ADMIN   </Text>
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

  text: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 30,
    marginBottom: 3,
    marginTop: 10,
    fontWeight: 'bold',
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 20,
  },

  img: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },

  input: {
    color:'black',
    fontSize: 20,
    fontFamily: 'sans-serif-light',
    height: 40,
    width: 'auto',
    padding: 5,
    marginLeft: 10,
    marginRight: 50,
  },

  buttonb: {
    position: 'absolute',
    top: 350,
    right: 8,
    left: 8,
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#0092FF',
  },

  bttxt: {
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  button: {
    margin: 3,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'grey',
    borderRadius: 20,
    alignItems: 'center',
  },

  txt: {
    textAlign: 'center',
    position:'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    fontSize: 25,
    fontFamily: 'sans-serif-light',
    color: 'grey'
  },

});
