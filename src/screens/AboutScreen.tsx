import React from 'react';
import { Options } from 'react-native-navigation';

import { Images } from '@/src/assets/images';
import { AboutPage } from '@/src/components/AboutPage';

export class AboutScreen extends React.Component {
  static navId = 'AboutScreen';

  static options(): Options {
    return {
      topBar: {
        title: {
          text: 'About',
        },
      },
      bottomTab: {
        text: 'About',
        icon: Images.tabIcon,
      },
    };
  }

  render() {
    return <AboutPage />;
  }
}
