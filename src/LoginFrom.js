import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';

class LoginForm extends Component {
    state = {email: '', password: ''};
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
                    <Button onPress={()=> console.log('tıklandı')}> Login </Button>
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

