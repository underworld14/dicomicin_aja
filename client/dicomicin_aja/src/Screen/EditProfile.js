import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Icon,
  Text,
  Item,
  Input,
  View,
  Button,
  Form,
  Label,
} from 'native-base';

export default class EditProfile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Edit Profile',
      headerStyle: {
        backgroundColor: '#38D40A',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
      headerRight: (
        <Icon
          name="ios-checkmark"
          style={{color: 'white', marginRight: 15}}
          onPress={() => alert('Okay On Prosessed')}
        />
      ),
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <TouchableOpacity>
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                }}
                style={styles.profImg}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Form style={{marginHorizontal: 20}}>
              <Item stackedLabel>
                <Label>Profile Name</Label>
                <Input placeholder="Enter Your Name Here !" />
              </Item>

              <Button
                block
                rounded
                success
                style={{marginTop: 30, width: 300, marginHorizontal: 40}}>
                <Text> Edit Profile </Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#38D40A',
  },

  footer: {
    backgroundColor: '#38D40A',
  },

  icon: {
    color: 'white',
  },

  profImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  profTxt: {
    marginVertical: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 18,
  },
});
