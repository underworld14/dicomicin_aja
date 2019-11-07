import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  Item,
  Input,
  View,
  Row,
  Button,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class FavScreen extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      token: null,
    };
  }

  async componentDidMount() {
    await this.getIdentity();
    this.enterFav();
    await this.renderFavorite();
  }

  async getIdentity() {
    await AsyncStorage.getItem('token').then(key => {
      this.setState({
        token: key,
      });
    });

    await AsyncStorage.getItem('id').then(key => {
      this.setState({
        id: JSON.parse(key),
      });
    });
  }

  enterFav = () => {
    if (this.state.id == null && this.state.token == null) {
      alert('You must login first to see your favorite !!');
      this.props.navigation.navigate('Login');
    }
  };

  renderFavorite = () => {
    const id = this.state.id;
    const token = this.state.token;
    this.props.getFavToons(id, token);
  };

  render() {
    const {favorites} = this.props;
    return (
      <Container>
        <Content>
          <Header searchBar style={styles.header}>
            <Item rounded>
              <Input placeholder="Search Comics" />
              <Icon name="ios-search" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>

          <View style={styles.bundleFav}>
            <Text style={styles.favtxt}> My Favorites Comics </Text>
          </View>

          <FlatList
            data={favorites.data}
            renderItem={({item}) => (
              <View style={styles.bundle} key={item.webtoons_id}>
                <Row>
                  <Image
                    style={styles.imglist}
                    source={{uri: item.webtoonsId.image}}
                  />

                  <View style={styles.bundletxt}>
                    <Text style={styles.title}>{item.webtoonsId.title}</Text>
                    <Text style={styles.genre}>{item.webtoonsId.genre}</Text>
                  </View>
                </Row>
              </View>
            )}
            keyExtractor={item => item.webtoons_id}
          />
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavScreen);

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
  imglist: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  bundle: {
    marginHorizontal: 10,
    marginTop: 5,
    padding: 10,
  },
  bundletxt: {
    marginLeft: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 13,
    color: '#6e6e6e',
    marginTop: 5,
  },
  bundleFav: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 5,
  },
  favtxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
