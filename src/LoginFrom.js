import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import firebase from 'firebase/compat';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class LoginForm extends Component {
    state = {email: '', password: '', loading: false};
    clickLogin(){
        this.setState({loading: true});
        console.log(this.state.loading);
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
        this.setState({loading: false});
    }
    loginFail()
    {
        console.log('login fail');
    }

    renderButton()
    {
        if(!this.state.loading){
           return <Button onPress={this.clickLogin.bind(this)}> Login </Button>;
        }
        return <Spinner size="small" />;
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
                    {this.renderButton()}
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

