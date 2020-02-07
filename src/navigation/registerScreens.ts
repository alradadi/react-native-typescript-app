import { Navigation } from 'react-native-navigation';

import { withNavProvider } from '@/src/navigation/hocs/withNavProvider';
import { AboutScreen } from '@/src/screens/AboutScreen';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { RandomScreen } from '@/src/screens/RnadomScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';

const SCREENS = [HomeScreen, SettingsScreen, AboutScreen, RandomScreen];

export const registerScreens = () => {
  SCREENS.forEach(screen =>
    Navigation.registerComponent(screen.navID, () => withNavProvider(screen)),
  );
};
