import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from './components/Button';
import Card from './components/Card';

class LoginForm extends Component {
    state = {email: '', password: ''};
    render(){
        const { subContainerStyle, inputStyle} = styles;
        return(
            <Card>
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
                    <Button onPress={()=> console.log('tıklandı')}> Login </Button>
                </View>
            </Card> 
        );
    }
    
}
const styles = {
    
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgraoundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      }
};


export default LoginForm;

