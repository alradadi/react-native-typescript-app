import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    topBar: {
      backButton: {
        showTitle: false,
      },
      title: {
        fontWeight: 'bold',
      },
    },
    statusBar: {
      style: Platform.select({
        ios: 'dark',
        android: 'light',
      }),
    },
  });
