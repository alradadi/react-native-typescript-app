import { Navigation } from 'react-native-navigation';

import { setRoot } from '@/src/navigation/setRoot';

import { registerScreens } from './registerScreens';
import { setDefaultOptions } from './setDefaultOptions';

export const start = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions(); // must be within AppLaunched callback or it will fail on Android in some cases
    setRoot();
  });
};
