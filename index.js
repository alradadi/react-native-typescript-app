import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('app', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'app',
      },
    },
  });
});
