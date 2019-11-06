import React, {Component} from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {View, Text, Content, Container, Row} from 'native-base';
import {connect} from 'react-redux';
import {getAllDetails} from '../_actions/Details';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      id: props.navigation.getParam('toonId'),
    };
  }

  async componentDidMount() {
    await this.renderDetails();
  }

  renderDetails() {
    const id = this.state.id;
    this.props.getAllDetails(id);
  }

  render() {
    const {details} = this.props;
    return (
      <Container>
        <Content>
          <Image
            style={styles.headImg}
            source={{uri: this.props.navigation.getParam('picture')}}
          />

          <Text style={styles.headtxt}>
            {this.props.navigation.getParam('title')}
          </Text>

          <FlatList
            data={details.data}
            renderItem={({item}) => (
              <View style={styles.conView} key={item.id}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailEps', {
                        eps: item.episode,
                        idEps: item.id,
                        toonId: item.webtoons_id,
                      })
                    }>
                    <Image style={styles.conImg} source={{uri: item.image}} />
                  </TouchableOpacity>

                  <View style={styles.conval}>
                    <Text style={styles.epstxt}> {item.episode} </Text>
                  </View>
                </Row>
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
    details: state.details,
  };
};

const mapDispatchToProps = {
  getAllDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailScreen);

const styles = StyleSheet.create({
  headImg: {
    width: 420,
    height: 230,
  },

  headtxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 10,
    marginBottom: 15,
  },

  conView: {
    borderColor: '#d1d1d1',
    borderWidth: 0.4,
    borderRadius: 5,
  },

  conImg: {
    width: 80,
    height: 80,
  },

  epstxt: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
});
