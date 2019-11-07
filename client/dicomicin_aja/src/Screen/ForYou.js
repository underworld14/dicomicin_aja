import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
  Row,
} from 'native-base';
import * as actionsToons from '../_redux/_actions/webtoons';
import * as actionsFavs from '../_redux/_actions/favorites';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

export class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      token: '',
    };
  }

  async componentDidMount() {
    await this.getIdentity();
    await this.getToons();
    await this.getFavorites();
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

  getToons = () => {
    this.props.handleGetToons();
  };

  getFavorites = () => {
    const userId = this.state.id;
    const token = this.state.token;
    this.props.handleGetFavs(token, userId);
  };

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth, height: BannerHeight, borderWidth: 2}}
          source={{uri: image}}
        />
      </View>
    );
  }

  render() {
    const {webtoons, favorites} = this.props;
    return (
      <Container>
        <Content>
          <View style={styles.carousel}>
            {/* <Icon name="ios-search" style={{posisition: 'absolute',}} /> */}
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}>
              {webtoons.data.map((image, index) =>
                this.renderPage(image.image, index),
              )}
            </Carousel>
          </View>

          <View style={styles.scrolcon}>
            <Text style={styles.textFav}> My Favorites Lists </Text>
            <Text style={styles.textchoice}> The Choices for you ... </Text>

            <ScrollView horizontal={true}>
              {favorites.data.map(image => (
                <View style={styles.horizon} key={image.id}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Episodes', {
                        picture: image.webtoonsId.image,
                        title: image.webtoonsId.title,
                        toonId: image.webtoons_id,
                      })
                    }>
                    <View style={styles.bundle}>
                      <Image
                        source={{uri: image.webtoonsId.image}}
                        style={styles.scrolimg}
                      />
                      <Text style={styles.scroltxt}>
                        {image.webtoonsId.title}
                      </Text>
                      <Text style={styles.scroltxt2}>
                        {image.webtoonsId.genre}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          <View styles={styles.allcon}>
            <Text style={styles.textAll}> All Comics </Text>
            {webtoons.data.map(image => (
              <View key={image.image} style={styles.bundle2}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Episodes', {
                      picture: image.image,
                      title: image.title,
                      toonId: image.id,
                    })
                  }>
                  <Row>
                    <Image source={{uri: image.image}} style={styles.rowimg} />

                    <View style={styles.titleall}>
                      <Text style={styles.rowtxt}> {image.title} </Text>
                      <Text style={styles.rowtxt2}> {image.genre} </Text>
                      <Button small success>
                        <Text> + Add To Favorite </Text>
                      </Button>
                    </View>
                  </Row>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
            <Button onPress={() => this.props.navigation.navigate('ForYou')}>
              <Icon name="apps" style={styles.icon} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('FavScreen')}>
              <Icon name="star" style={styles.icon} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" style={styles.icon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    webtoons: state.webtoons,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetToons: () => dispatch(actionsToons.handleGetToons()),
    handleGetFavs: (token, userId) =>
      dispatch(actionsFavs.handleGetFavs(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForYou);

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
  carousel: {
    flex: 1,
    alignSelf: 'center',
  },
  scrolcon: {
    margin: 10,
  },
  textFav: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textchoice: {
    marginTop: 2,
    fontSize: 16,
    color: '#6e6e6e',
  },
  horizon: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  scrolimg: {
    width: 110,
    height: 110,
  },
  scroltxt: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
  scroltxt2: {
    marginTop: 2,
    fontSize: 11,
    color: '#979899',
  },
  bundle: {
    marginRight: 15,
    marginTop: 5,
    padding: 10,
    borderColor: '#d1d1d1',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  textAll: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 5,
  },
  allcon: {},
  rowimg: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  rowtxt: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowtxt2: {
    marginTop: 3,
    fontSize: 12,
    marginBottom: 3,
    color: '#6e6e6e',
  },
  titleall: {
    marginLeft: 8,
    marginTop: 5,
  },
  bundle2: {
    padding: 3,
    borderRadius: 5,
    marginHorizontal: 3,
    marginVertical: 3,
  },
});
