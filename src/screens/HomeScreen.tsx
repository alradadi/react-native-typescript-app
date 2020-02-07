import React from 'react';
import { Options } from 'react-native-navigation';

import { Images } from '@/src/assets/images';
import { HomePage } from '@/src/components/HomePage';

export class HomeScreen extends React.Component {
  public static navID = 'HomeScreen';

  public static options(): Options {
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

  public render() {
    return <HomePage />;
  }
}
