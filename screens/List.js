import _ from 'lodash';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableHighlight
  
} from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

import { cacheFonts } from '../src/helpers/AssetsCaching';

const SCREEN_WIDTH = Dimensions.get('window').width;


const USERS = [
  {
    name: 'Johh Smith',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    value: '- 164',
  },
  {
    name: 'Sarah Parker',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
    value: '+ 203',
    positive: true,
  },
  {
    name: 'Paul Allen',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    value: '+ 464',
    positive: true,
  },
  {
    name: 'Terry Andrews',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
    value: '- 80',
    positive: false,
  },
  {
    name: 'Andy Vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
    value: '- 230',
    positive: false,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  }
];

export default class ListsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await cacheFonts({
      georgia: require('../assets/fonts/Georgia.ttf'),
      regular: require('../assets/fonts/Montserrat-Regular.ttf'),
      light: require('../assets/fonts/Montserrat-Light.ttf'),
      bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  _onPressButton=()=>{
    console.log("asdja")
  }

  renderCard(user, index) {
    const { name, avatar } = user;

    return (
      <View
       
        key={index}
        style={{
          height: 60,
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
              <TouchableHighlight onPress={this._onPressButton} underlayColor="white">

        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri: avatar,
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: 15,
              marginLeft: 10,
              color: 'gray',
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
         
          <View>
            <Button
              title="Mores"
              buttonStyle={{
                width: 50,
                height: 28,
                backgroundColor: 'rgba(113, 154, 112, 1)',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
              titleStyle={{
                fontFamily: 'regular',
                fontSize: 8,
                color: 'white',
              }}
              onPress={() => console.log('aye')}
              underlayColor="transparent"
            />
          </View>
          <View>
            <Button
              title="Mores"
              buttonStyle={{
                width: 50,
                height: 28,
                backgroundColor: 'rgba(113, 154, 112, 1)',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
              titleStyle={{
                fontFamily: 'regular',
                fontSize: 8,
                color: 'white',
              }}
              onPress={() => console.log('aye')}
              underlayColor="transparent"
            />
          </View>
        </View>
        </TouchableHighlight>

      </View>
    );
  }

  renderListCards() {
    return _.map(USERS, (user, index) => {
      console.log(user)
      return this.renderCard(user, index);
    });
  }

  render() {

    return (
      <View>
        <ScrollView>
          {this.state.fontLoaded ? (
            <SafeAreaView
              style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}
            >


              {this.renderListCards()}


            </SafeAreaView>
          ) : (
              <Text>Loading...</Text>
            )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'regular',
    marginLeft: 20,
  },
});
