import React, { Component } from 'react';
import { View, StyleSheet,Alert,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }
sendInformation(){
console.log("login ",this.state.text)
}
    render() {
        console.log(this.state.text)
        return (
            <View style={styles.container}>
                <Input
                    style={styles.container}
                    placeholder='INPUT WITH CUSTOM ICON'
                    onChangeText={(text) => this.setState({ text })}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Button
                   onPress={() => {
                   console.log("sdfsdf")
                  }}
                    style={styles.button}
                    title="Login"
                    Type="solid"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 200,
        backgroundColor: "yellow"

    },
    button: {
        width: 50,
        marginTop: 20,
        paddingTop: 20,
    }
})
