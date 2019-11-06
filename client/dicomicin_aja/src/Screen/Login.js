import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Button,
  Text,
  Item,
  Input,
  Form,
  Label,
  Thumbnail,
  Icon,
} from 'native-base';
import config from '../../config-env';

import toonImg from '../Component/img/toon.jpg';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      icon: 'eye-off',
      username: '',
      password: null,
      pass: true,
      isDisable: true,
      token: '',
      id: '',
    };
  }

  userLogin = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/login`,
      data: {
        email: this.state.username,
        password: this.state.password,
      },
    }).then(response => {
      this.setState({
        id: response.data.id,
        token: response.data.token,
      });

      const login = response.data.login;

      if (login !== false) {
        AsyncStorage.setItem('token', this.state.token);
        AsyncStorage.setItem('id', JSON.stringify(this.state.id));
        alert(`Selamat Datang kembali, ${response.data.name}`);
        this.props.navigation.navigate('ForYou');
      } else {
        alert('Login Failed !!');
        console.log('Login Failed');
      }
    });
  };

  eyeIcon = () => {
    this.setState(before => ({
      icon: before.icon === 'eye' ? 'eye-off' : 'eye',
      pass: !before.pass,
    }));
  };

  userValidation = username => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(username) == true && this.state.password != null) {
      this.setState({
        username: username,
        isDisable: false,
      });
    } else {
      this.setState({
        username: username,
        isDisable: true,
      });
    }
    this.setState({
      username,
    });
  };

  passValidation = password => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((password != null) == true && reg.test(this.state.username) == true) {
      this.setState({
        password: password,
        isDisable: false,
      });
    } else {
      this.setState({
        password: password,
        isDisable: true,
      });
    }
    this.setState({
      password,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Thumbnail large source={toonImg} />
          <Text style={styles.textLogo}> LOG IN </Text>
          <Text style={styles.textLogo2}>
            Login with Your Webtoon Account !!
          </Text>
        </View>

        <Form style={styles.formlogin}>
          <Item floatingLabel>
            <Label style={styles.textLabel}> E-Mail </Label>
            <Input
              onChangeText={username => this.userValidation(username)}
              style={{color: 'white'}}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.textLabel}> Password </Label>
            <Input
              secureTextEntry={this.state.pass}
              onChangeText={password => this.passValidation(password)}
              style={{color: 'white'}}
            />
            <Icon name={this.state.icon} onPress={() => this.eyeIcon()} />
          </Item>

          <Button
            success
            disabled={this.state.isDisable}
            rounded
            block
            style={styles.btnsign}
            onPress={() => this.userLogin()}>
            <Text style={{justifyContent: 'center'}}> Login Here </Text>
          </Button>
        </Form>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <View style={styles.callRegister}>
            <Text style={styles.callRegistertxt}>Don't Have an Account ?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForYou')}>
          <View style={styles.callSkip}>
            <Text style={styles.callSkiptxt}>
              Skip, I just wanna to Read Comics
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.copyright}>
          @ Webtoon Clone Ver. 0.1 Copyright By Yusril Izza
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b01b',
  },
  logo: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    marginTop: 10,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  textLogo2: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  textLabel: {
    color: 'white',
    fontWeight: 'bold',
  },

  formlogin: {
    marginTop: 5,
    marginHorizontal: 25,
  },
  btnsign: {
    marginTop: 60,
    marginLeft: 8,
    width: 350,
  },

  btnregister: {
    marginTop: 0,
    marginLeft: 8,
    width: 350,
  },

  copyright: {
    color: 'white',
    fontSize: 12,
    marginTop: 115,
    marginHorizontal: 80,
  },

  or: {
    color: 'white',
    fontSize: 12,
    marginVertical: 10,
    marginHorizontal: 140,
  },
  modalContainer: {
    backgroundColor: '#00b01b',
    flex: 1,
  },
  backLogin: {
    alignItems: 'center',
    marginTop: 180,
  },
  textback: {
    color: 'white',
    fontSize: 13,
  },
  callRegister: {
    alignItems: 'center',
    marginTop: 20,
  },
  callRegistertxt: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  callSkip: {
    alignItems: 'center',
    marginTop: 15,
  },
  callSkiptxt: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
