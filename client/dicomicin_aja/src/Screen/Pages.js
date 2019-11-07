import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {View, Content, Container} from 'native-base';
import {connect} from 'react-redux';

import * as actionsPages from '../_redux/_actions/pages';

class DetailEps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idEps: props.navigation.getParam('idEps'),
      idToon: props.navigation.getParam('toonId'),
    };
  }

  async componentDidMount() {
    await this.getAllPages();
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

  getAllPages() {
    const idToon = this.state.idToon;
    const idEps = this.state.idEps;
    this.props.handleGetPages(idToon, idEps);
  }

  render() {
    const {pages} = this.props;
    return (
      <Container>
        <Content>
          <FlatList
            data={pages.data}
            renderItem={({item}) => (
              <View style={styles.comiccon} key={item.id}>
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
    pages: state.pages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetPages: (toonId, epsId) =>
      dispatch(actionsPages.handleGetPages(toonId, epsId)),
  };
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
