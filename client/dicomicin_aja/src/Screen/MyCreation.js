import React, {Component} from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content, Icon, Text, View, Row, Fab} from 'native-base';
import config from '../../config-env';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {connect} from 'react-redux';
import {getMyWebtoons} from '../_actions/MyWebtoon';

class MyCreation extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Webtoon',
      headerStyle: {
        backgroundColor: '#f2f2f2',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
    };
  };

  constructor() {
    super();
    this.state = {
      active: false,
      banners: [],
      id: null,
      token: null,
    };
  }

  async componentDidMount() {
    await this.getIdentity();
    await this.renderMyCreation();
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

  renderMyCreation() {
    const id = this.state.id;
    const token = this.state.token;
    this.props.getMyWebtoons(id, token);
  }

  render() {
    const {mywebtoons} = this.props;
    return (
      <Container>
        <Content>
          <FlatList
            data={mywebtoons.data}
            renderItem={({item}) => (
              <View style={styles.bundle}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('EditWebtoon', {
                        title: item.title,
                      })
                    }>
                    <Image style={styles.imglist} source={{uri: item.image}} />
                  </TouchableOpacity>

                  <View style={styles.bundle2}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.genre}> {item.genre} </Text>
                  </View>
                </Row>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </Content>

        <View>
          <Fab
            active={this.state.active}
            containerStyle={{}}
            style={{backgroundColor: '#38D40A'}}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('CreateWebtoon')}>
            <Icon name="ios-create" />
          </Fab>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    mywebtoons: state.mywebtoons,
  };
};

const mapDispatchToProps = {
  getMyWebtoons,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyCreation);

const styles = StyleSheet.create({
  bundle: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
  },
  imglist: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  bundle2: {
    marginLeft: 10,
    marginTop: 15,
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
});
