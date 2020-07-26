import { LayoutTabsChildren, Navigation } from 'react-native-navigation';

import { AboutScreen } from '@/src/screens/AboutScreen';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';

export const setRoot = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          createBottomTab(HomeScreen.navId),
          createBottomTab(SettingsScreen.navId),
          createBottomTab(AboutScreen.navId),
        ],
      },
    },
  });

const createBottomTab = (name: string): LayoutTabsChildren => ({
  stack: {
    children: [
      {
        component: { name },
      },
    ],
  },
});
