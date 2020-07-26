import React from 'react';
import { Options } from 'react-native-navigation';

import { Images } from '@/src/assets/images';
import { SettingsPage } from '@/src/components/SettingsPage';

export class SettingsScreen extends React.Component {
  static navId = 'SettingsScreen';

  static options(): Options {
    return {
      topBar: {
        title: {
          text: 'Settings',
        },
      },
      bottomTab: {
        text: 'Settings',
        icon: Images.tabIcon,
      },
    };
  }

  render() {
    return <SettingsPage />;
  }
}
