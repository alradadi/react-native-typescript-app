import React from 'react';
import { Options } from 'react-native-navigation';

import { RandomPage, RandomPageProps } from '@/src/components/RandomPage';

export class RandomScreen extends React.Component<RandomPageProps> {
  static navId = 'RandomScreen';

  static options(): Options {
    return {
      topBar: {
        title: {
          text: 'Random',
        },
      },
    };
  }

  render() {
    return <RandomPage {...this.props} />;
  }
}
