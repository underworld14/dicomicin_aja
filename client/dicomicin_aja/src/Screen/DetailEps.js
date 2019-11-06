import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {View, Content, Container} from 'native-base';
import {connect} from 'react-redux';
import {getAllEpisodes} from '../_actions/Episodes';

class DetailEps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idEps: props.navigation.getParam('idEps'),
      idToon: props.navigation.getParam('toonId'),
    };
  }

  async componentDidMount() {
    await this.renderEpisodes();
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('eps'),
      headerStyle: {
        backgroundColor: '#f2f2f2',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
    };
  };

  renderEpisodes() {
    const idToon = this.state.idToon;
    const idEps = this.state.idEps;
    this.props.getAllEpisodes(idToon, idEps);
  }

  render() {
    const {episodes} = this.props;
    return (
      <Container>
        <Content>
          <FlatList
            data={episodes.data}
            renderItem={({item}) => (
              <View style={styles.comiccon} key={episodes.data.key}>
                <Image style={styles.comicImage} source={{uri: item.image}} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
  };
};

const mapDispatchToProps = {
  getAllEpisodes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailEps);

const styles = StyleSheet.create({
  comiccon: {
    margin: 5,
    alignItems: 'center',
  },
  comicImage: {
    width: '100%',
    height: 600,
    marginTop: 0,
  },
});
