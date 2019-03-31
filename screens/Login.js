import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { View,StyleSheet } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>

                <Input style={styles.container}
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

            </View>
        )
    }
}
const styles=StyleSheet.create({
    contaiter:{
        marginTop: 200,
        width:40
    }
})