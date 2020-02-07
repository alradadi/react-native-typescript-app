import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';

import { NavProvider } from '@/src/navigation/providers/NavProvider';

interface NavProps {
  componentId: string;
}

export const withNavProvider = <P extends object = {}>(
  Comp: React.ComponentType<P>,
) => {
  const WrappedComp: React.ComponentType<P & NavProps> = (
    props: P & NavProps,
  ) => {
    return (
      <NavProvider componentId={props.componentId}>
        <Comp {...props} />
      </NavProvider>
    );
  };

  return hoistNonReactStatics(WrappedComp, Comp);
};
