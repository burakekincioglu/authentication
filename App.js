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
import Spinner from './src/components/Spinner';
import CardSection from './src/components/CardSection';
import Button from './src/components/Button';

class App extends Component {

  state = {loggedIn: null};

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
        });

      firebase.auth().onAuthStateChanged( (user) => { // login olmuş bir kullanıcı var mı yok mu kontrol ediyor
        if(user)
        {
          this.setState({loggedIn: true});
        }else {
          this.setState({loggedIn: false});
        }
      })

  };

  clickLogout(){
    firebase.auth().signOut(); // logout işlemi
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (<CardSection>
          <Button onPress={this.clickLogout.bind(this)}> Logout </Button>
        </CardSection>);
        
      case false:
        return(
          <LoginForm />
        );
        
    
      default:
        return(
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }
  

  render() {
    return (
      <View>
        <Header headerText={'Login Panel'}></Header>
        {this.renderContent()}
      </View>
    );

  }

}



export default App;
