import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, Button, Icon, Label } from 'native-base';

export default class EditWebtoon extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Edit Webtoon',
            headerStyle: {
                backgroundColor: '#38D40A'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#fff',
            headerRight: (
                <Icon name="ios-checkmark" style={{ color: 'white', marginRight: 15, }} onPress={() => navigation.navigate('MyCreation')} />
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                id: '1',
                Eps: 'Eps 1',
                image: 'https://1.bp.blogspot.com/--ZBHrUupvFk/WCR2XmJO_GI/AAAAAAAAANY/tpVJNdCfBtY4yCmAytH_SqenNevIPhHFQCLcB/s1600/thumb_ipad.jpg',
                date: '1 Januari 2019'
            }, {
                id: '2',
                Eps: 'Eps 2',
                image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-14-210858-wwwwebtoonscom-54b73c5bc2c2cd3464142bcb2addefb6.png',
                date: '2 Januari 2019'
            }, {
                id: '3',
                Eps: 'Eps 3',
                image: 'https://i0.wp.com/kreativv.com/wp-content/uploads/2019/08/Annisa-Nisfihani_Pasutri-Gaje-4.jpg?resize=500%2C451&ssl=1',
                date: '3 Januari 2019'
            }, {
                id: '4',
                Eps: 'Eps 4',
                image: 'https://instagram.frix8-1.fna.fbcdn.net/vp/0151c3bfc7cd0795a6a183725d0dd189/5DDFF15B/t51.2885-15/e35/66689880_358164044865858_95915773824704788_n.jpg?_nc_ht=instagram.frix8-1.fna.fbcdn.net',
                date: '4 Januari 2019'
            },],
        }
    }

    render() {
        return (
            <Container>

                <Content>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}> {this.props.navigation.getParam('title')} </Text>
                    </View>

                    <View style={styles.headcon}>
                        <Text style={styles.headtxt}> Episode </Text>
                    </View>

                    <FlatList
                        data={this.state.banners}
                        renderItem={({ item }) => (

                            <View style={styles.conView}>
                                <Row style={{ marginTop: 10 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode', { eps: item.Eps })}>
                                        <Image style={styles.conImg} source={{ uri: item.image }} />
                                    </TouchableOpacity>

                                    <View style={styles.conval}>
                                        <Text style={styles.epstxt}> {item.Eps} </Text>
                                        <Text style={{ marginTop: 10 }}> {item.date} </Text>
                                    </View>

                                </Row>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />

                    <Button block rounded success style={{ marginTop: 20, width: 300, marginHorizontal: 60 }} onPress={() => this.props.navigation.navigate('CreateEpisode')} >
                        <Text> + Add Episode </Text>
                    </Button>
                    <Button block rounded warning style={{ marginTop: 10, width: 300, marginHorizontal: 60 }}
                        onPress={() => alert('On Process')} >
                        <Text> - Delete Episode </Text>
                    </Button>

                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({

    headcon: {
        marginHorizontal: 15,
        marginTop: 5,
    },

    headImg: {
        width: 360,
        height: 220,
        borderWidth: 3,
        borderColor: 'black'
    },

    headtxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    },

    conView: {
        marginHorizontal: 25
    },

    conImg: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'black'
    },

    conval: {
        margin: 15,
    },

    epstxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})