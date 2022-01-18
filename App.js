/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Header from './src/components/Header';


class App extends Component {

  UNSAFE_componentWillMount() {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyBWpYcoUOR1GdQ7eGcrXkZW5VqgULLVQ4U',
          projectId: 'kimlikdogrulama-544b6',
          authDomain: 'kimlikdogrulama-544b6.firebaseapp.com',
          databaseURL: 'https://kimlikdogrulama-544b6.firebaseio.com',
          storageBucket: 'gs://kimlikdogrulama-544b6.appspot.com', // sorun çıkarsa buraya bak !!!
          messagingSenderId: '595911092266'
        }
      );
  };

  render() {
    return (
      <View>
        <Header headerText={'Giriş Ekranı'}></Header>
        <Text style={{marginTop: 5}}>Kimlik Doğrulama uygulaması Login sayfası </Text>
      </View>
    );

  }

}



export default App;
