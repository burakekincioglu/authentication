import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import Button from './components/Button';

class LoginForm extends Component {
    state = {email: '', password: ''};
    render(){
        const {containerStyle, subContainerStyle} = styles;
        return(
            <View style={containerStyle}>
                <View style={subContainerStyle}>
                    <TextInput 
                    placeholder='Email'
                    style={inputStyle}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </View>

                <View style={subContainerStyle}>
                    <TextInput 
                    placeholder='Password'
                    style={inputStyle}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </View>

                <View style={subContainerStyle}>
                    <Button onPress={()=> console.log('tıklandı')}> GİRİŞ </Button>
                </View>
            </View> 
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

