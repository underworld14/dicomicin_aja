import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Icon} from 'native-base';
import {Share} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/Screen/Login';
import Register from './src/Screen/Register';
import ForYou from './src/Screen/ForYou';
import DetailScreen from './src/Screen/DetailScreen';
import DetailEps from './src/Screen/DetailEps';
import FavScreen from './src/Screen/FavScreen';
import Profile from './src/Screen/Profile';
import EditProfile from './src/Screen/EditProfile';
import MyCreation from './src/Screen/MyCreation';
import CreateWebtoon from './src/Screen/CreateWebtoon';
import CreateEpisode from './src/Screen/CreateEpisode';
import EditWebtoon from './src/Screen/EditWebtoon';
import EditEpisode from './src/Screen/EditEpisode';
import store from './src/_redux/store';

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const signedOut = createStackNavigator(
  {
    Login: {
      screen: Login,
      title: 'Login',
      navigationOptions: {header: null},
    },
    Register: {
      screen: Register,
      title: 'Register',
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const signedIn = createStackNavigator(
  {
    ForYou: {
      screen: ForYou,
      title: 'ForYou',
      navigationOptions: {header: null},
    },
    DetailScreen: {
      screen: DetailScreen,
      title: 'DetailScreen',
      navigationOptions: () => ({
        title: 'Detail Webtoon',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Icon
            name="share-alt"
            style={{color: 'black', marginRight: 15}}
            onPress={() => onShare()}
          />
        ),
      }),
    },

    FavScreen: {
      screen: FavScreen,
      title: 'FavScreen',
      navigationOptions: {header: null},
    },

    Profile: {
      screen: Profile,
      title: 'Profile',
    },

    MyCreation: {
      screen: MyCreation,
      title: 'MyCreation',
    },

    EditProfile: {
      screen: EditProfile,
      title: 'EditProfile',
    },

    DetailEps: {
      screen: DetailEps,
      title: 'DetailEps',
    },

    CreateWebtoon: {
      screen: CreateWebtoon,
      title: 'CreateWebtoon',
    },

    CreateEpisode: {
      screen: CreateEpisode,
      title: 'CreateEpisode',
    },

    EditWebtoon: {
      screen: EditWebtoon,
      title: 'EditWebtoon',
    },

    EditEpisode: {
      screen: EditEpisode,
      title: 'EditEpisode',
    },
  },
  {
    initialRouteName: 'ForYou',
  },
);

const Switch = createSwitchNavigator(
  {
    signedIn: signedIn,
    signedOut: signedOut,
  },
  {
    initialRouteName: 'signedIn',
  },
);
const AppContainer = createAppContainer(Switch);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
