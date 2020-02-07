import React from 'react';
import { Options } from 'react-native-navigation';

import { RandomPage, RandomPageProps } from '@/src/components/RandomPage';

export class RandomScreen extends React.Component<RandomPageProps> {
  public static navID = 'RandomScreen';

  public static options(): Options {
    return {
      topBar: {
        title: {
          text: 'Random',
        },
      },
    };
  }

  public render() {
    return <RandomPage {...this.props} />;
  }
}
