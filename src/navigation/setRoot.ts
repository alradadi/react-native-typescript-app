import { LayoutTabsChildren, Navigation } from 'react-native-navigation';

import { AboutScreen } from '@/src/screens/AboutScreen';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';

export const setRoot = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          createBottomTab(HomeScreen.navID),
          createBottomTab(SettingsScreen.navID),
          createBottomTab(AboutScreen.navID),
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
