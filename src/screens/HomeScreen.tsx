import React from 'react';
import { Options } from 'react-native-navigation';

import { Images } from '@/src/assets/images';
import { HomePage } from '@/src/components/HomePage';

export class HomeScreen extends React.Component {
  static navId = 'HomeScreen';

  static options(): Options {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
      bottomTab: {
        text: 'Home',
        icon: Images.tabIcon,
      },
    };
  }

  render() {
    return <HomePage />;
  }
}
