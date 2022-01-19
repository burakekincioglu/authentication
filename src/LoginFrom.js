import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import firebase from 'firebase/compat';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';


class LoginForm extends Component {
    state = {email: '', password: ''};
    clickLogin(){
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }
    loginSuccess() {
        console.log('login başarılı');

    }
    loginFail()
    {
        console.log('login fail');
    }
    render(){
        const {inputStyle} = styles;
        return(
            <Card>
                <CardSection>
                    <TextInput 
                    placeholder='Email'
                    style={inputStyle}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <TextInput 
                    placeholder='Password'
                    style={inputStyle}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <Button onPress={this.clickLogin.bind(this)}> Login </Button>
                </CardSection>
            </Card> 
        );
    }
    
}
const styles = {
    
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      }
};


export default LoginForm;

