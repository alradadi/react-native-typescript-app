import { useEffect, useMemo, useRef } from 'react';
import { Navigation, Options } from 'react-native-navigation';

import { useComponentId } from '@/src/navigation/hooks/useComponentId';
import { NavComp } from '@/src/navigation/types';

export const useNav = () => {
  const componentId = useComponentId();

  /*
   * Create a reference of componentId to eliminate the need for
   * passing it as dependency to useMemo() which in some cases will cause bugs.
   */
  const componentIdRef = useRef(componentId);

  /*
   * Update componentId reference
   */
  useEffect(() => {
    componentIdRef.current = componentId;
  }, [componentId]);

  return useMemo(
    () => ({
      dismissAllModals: () => Navigation.dismissAllModals(),

      dismissModal: () => Navigation.dismissModal(componentIdRef.current),

      dismissOverlay: () => Navigation.dismissOverlay(componentIdRef.current),

      mergeOptions: (options: Options) =>
        Navigation.mergeOptions(componentIdRef.current, options),

      pop: () => Navigation.pop(componentIdRef.current),

      push: <P extends object>(
        CompClass: NavComp<P>,
        passProps: P,
        options?: Options,
      ) =>
        Navigation.push(componentIdRef.current, {
          component: {
            name: CompClass.navID,
            options,
            passProps,
          },
        }),

      showModal: <P extends object>(
        CompClass: NavComp<P>,
        passProps: P,
        options?: Options,
      ) =>
        Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  name: CompClass.navID,
                  options,
                  passProps,
                },
              },
            ],
          },
        }),
      showOverlay: <P extends object>(
        CompClass: NavComp<P>,
        passProps: P,
        options?: Options,
      ) =>
        Navigation.showOverlay({
          component: {
            name: CompClass.navID,
            options,
            passProps,
          },
        }),
    }),
    [],
  );
};
