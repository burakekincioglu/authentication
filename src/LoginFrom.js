import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from './components/Button';

class LoginForm extends Component {
    state = {email: '', password: ''};
    render(){
        const {containerStyle, subContainerStyle, inputStyle} = styles;
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
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        bordorColor: '#ddd',
        bordorBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
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

