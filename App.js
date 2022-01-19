/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase/compat/app'; // compat kaldırmayı dene
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Header from './src/components/Header';
import LoginForm from './src/LoginFrom';


class App extends Component {

  UNSAFE_componentWillMount() {
      firebase.initializeApp(
        {// bu configurasyon web projesi oluşturulurken otomatik verildi.
          apiKey: "AIzaSyBWpYcoUOR1GdQ7eGcrXkZW5VqgULLVQ4U", 
          authDomain: "kimlikdogrulama-544b6.firebaseapp.com",
          projectId: "kimlikdogrulama-544b6",
          storageBucket: "kimlikdogrulama-544b6.appspot.com",
          messagingSenderId: "595911092266",
          appId: "1:595911092266:web:5ee8173c9bf15c234b7b53",
          measurementId: "G-CM4VCBM1DR"
        }
      );
  };

/*
aşağıdaki configurasyon sorunlu

apiKey: 'AIzaSyBWpYcoUOR1GdQ7eGcrXkZW5VqgULLVQ4U',
projectId: 'kimlikdogrulama-544b6',
authDomain: 'kimlikdogrulama-544b6.firebaseapp.com',
databaseURL: 'https://kimlikdogrulama-544b6.firebaseio.com',
storageBucket: 'gs://kimlikdogrulama-544b6.appspot.com', // sorun çıkarsa buraya bak !!!
messagingSenderId: '595911092266'
*/

  render() {
    return (
      <View>
        <Header headerText={'Login Panel'}></Header>
        <LoginForm />
      </View>
    );

  }

}



export default App;
