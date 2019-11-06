import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  View,
  Button,
  Card,
  CardItem,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Profile',
      headerStyle: {
        backgroundColor: '#f2f2f2',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
      headerRight: (
        <Icon
          name="ios-create"
          style={{color: 'black', marginRight: 15}}
          onPress={() => navigation.navigate('EditProfile')}
        />
      ),
    };
  };

  constructor() {
    super();
    this.state = {
      id: null,
    };
  }

  async componentDidMount() {
    await this.getId();
    this.enterProfile();
  }

  async getId() {
    await AsyncStorage.getItem('id').then(key => {
      this.setState({
        id: JSON.parse(key),
      });
    });
  }

  enterProfile() {
    if (this.state.id == null) {
      alert('Please Login First !!');
      this.props.navigation.navigate('Login');
    }
  }

  async logout() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('id');
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <TouchableOpacity>
              <Image
                source={{
                  uri:
                    'http://www.ahm.org.py/awk/wp-content/uploads/2017/01/user.jpg',
                }}
                style={styles.profImg}
              />
            </TouchableOpacity>

            <Text style={styles.profTxt}> Username </Text>
          </View>

          <Card>
            <CardItem
              header
              button
              onPress={() => this.props.navigation.navigate('MyCreation')}>
              <Text style={{fontWeight: 'bold'}}> My Webtoon Creation </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem
              footer
              button
              onPress={() => this.logout()}
              style={{marginTop: 10}}>
              <Text style={{fontWeight: 'bold', color: 'red'}}> Log Out </Text>
            </CardItem>
          </Card>
        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
            <Button onPress={() => this.props.navigation.navigate('ForYou')}>
              <Icon name="apps" style={styles.icon} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('FavScreen')}>
              <Icon name="star" style={styles.icon} />
            </Button>
            <Button>
              <Icon
                name="person"
                style={styles.icon}
                onPress={() => this.props.navigation.navigate('Profile')}
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
  },

  footer: {
    backgroundColor: '#f2f2f2',
  },

  icon: {
    color: 'black',
  },

  profImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#00b01b',
  },

  profTxt: {
    marginVertical: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
  },
});
