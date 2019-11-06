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
  Container,
  Content,
} from 'native-base';
import config from '../../config-env';

import toonImg from '../Component/img/toon.jpg';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'eye-off',
      username: '',
      name: null,
      password: null,
      pass: true,
      isDisable: true,
      token: '',
      id: '',
    };
  }

  userRegister = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/register`,
      data: {
        name: this.state.name,
        email: this.state.username,
        password: this.state.password,
      },
    }).then(res => {
      this.setState({
        id: res.data.id,
        token: res.data.token,
      });

      alert(`${res.data.email} succesfull registered !!`);
      AsyncStorage.setItem('token', this.state.token);
      AsyncStorage.setItem('id', JSON.stringify(this.state.id));
      this.props.navigation.navigate('ForYou');
    });
  };

  eyeIcon = () => {
    this.setState(before => ({
      icon: before.icon === 'eye' ? 'eye-off' : 'eye',
      pass: !before.pass,
    }));
  };

  inputName = name => {
    if (name != null) {
      this.setState({
        name: name,
      });
    }
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
          <Text style={styles.textLogo}> Register Your New Account </Text>
          <Text style={styles.textLogo2}>Please fullfill the from below !</Text>
        </View>

        <Form style={styles.formlogin}>
          <Item floatingLabel>
            <Label style={styles.textLabel}> Your Name </Label>
            <Input
              onChangeText={inputName => this.inputName(inputName)}
              style={{color: 'white'}}
            />
          </Item>
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
            primary
            rounded
            block
            style={styles.btnregister}
            disabled={this.state.isDisable}
            onPress={() => this.userRegister()}>
            <Text style={{justifyContent: 'center'}}>Register Now</Text>
          </Button>
        </Form>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.backCon}>
            <Text style={styles.back}>
              Have an account, Throw me back to Login !
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00b01b',
    flex: 1,
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
    marginTop: 20,
    marginHorizontal: 25,
  },

  btnregister: {
    marginTop: 30,
    marginLeft: 8,
    width: 350,
  },
  backCon: {
    alignItems: 'center',
    marginTop: 40,
  },
  back: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
