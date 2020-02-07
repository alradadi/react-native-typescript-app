import React from 'react';
import { Options } from 'react-native-navigation';

export type NavComp<P = {}> = React.ComponentType<P> & {
  navID: string;
  options?: () => Options;
};
