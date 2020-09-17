/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Feather from 'react-native-vector-icons/Feather';
const image = require('./Image/image.jpg');

const App: () => React$Node = () => {
  const [user, onChangeUser] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  const heightImage = Dimensions.get('window').height
    ? Dimensions.get('window').height
    : '100%';
  return (
    <>
      <View style={styles.body}>
        <Image
          source={image}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.bodyView}>
          <Text style={styles.Title}>Login Now</Text>
          <View style={styles.viewTextInput}>
            <TextInput
              placeholder="Username"
              style={{color: '#fff'}}
              onChangeText={(text) => onChangeUser(text)}
              placeholderTextColor={'#fff'}
              value={user}
            />
          </View>
          <View style={styles.viewTextInput}>
            <TextInput
              secureTextEntry={true}
              style={{color: '#fff'}}
              placeholder="Password"
              placeholderTextColor={'#fff'}
              onChangeText={(text) => onChangePass(text)}
              value={pass}
            />
          </View>
          <View style={styles.viewNewUser}>
            <TouchableHighlight onPress={() => alert(`forgot password`)}>
              <Text style={styles.textLink}>Forgot Password?</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => alert(`New User?`)}>
              <Text style={styles.textLink}>New User?</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight
            onPress={() => alert(`user: ${user} - Pass: ${pass}`)}
            style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableHighlight>

          <View style={styles.viewLogin}>
            <Text style={{color: '#fff'}}>Or Login With</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.viewIcon, {backgroundColor: '#3b5998'}]} />
              <View style={[styles.viewIcon, {backgroundColor: '#1da1f2'}]} />
              <View style={[styles.viewIcon, {backgroundColor: '#bd081c'}]} />
              <View style={[styles.viewIcon, {backgroundColor: '#0077b5'}]} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  button: {
    height: 40,
    width: '40%',
    backgroundColor: '#61dafb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  },
  viewNewUser: {
    width: '90%',
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLink: {
    color: '#fff',
  },
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyView: {
    width: '80%',
    height: 380,
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    alignItems: 'center',
  },
  viewLogin: {
    marginTop: 35,
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  viewIcon: {
    height: 40,
    width: 40,
    borderWidth: 1,
    margin: 0.5,
    borderColor: '#fff',
  },
  backgroundImage: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 25,
    marginBottom: 10,
  },
});

export default App;
