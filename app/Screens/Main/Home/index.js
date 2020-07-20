import React, {Component, PureComponent} from 'react';
import {Animated, Platform, Linking} from 'react-native';
import HomePage from '../../../Containers/HomePage';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {updateNeeded: false};
    this._deltaX = new Animated.Value(0);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigateWithUrl(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
      Linking.getInitialURL().then(url => {
        if (url) {
          this.handleOpenURL({url});
        }
      });
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = event => {
    this.navigateWithUrl(event.url);
  };

  navigateWithUrl = async url => {
    if (!url) {
      url = '';
    }

    let route, routeName;
    if (url.includes('com.tr')) {
      route = url.split('com.tr/')[1];
    } else {
      route = url.replace(/.*?:\/\//g, '');
    }
    routeName = route.split('/')[0];

    // switch (routeName) {
    //   case 'list':
    //     const userId = route.split('/')[1];
    //     const listId = route.split('/')[2];
    //     this.props.navigation.navigate('SharedList', {userId, listId});
    //     break;
    //   default:
    //     break;
    // }
  };

  render() {
    return <HomePage navigation={this.props.navigation} />;
  }
}

export default Home;
