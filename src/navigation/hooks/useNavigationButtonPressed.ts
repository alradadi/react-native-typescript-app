import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';

import { useComponentId } from '@/src/navigation/hooks/useComponentId';

export const useNavigationButtonPressed = (
  callback: (buttonID: string) => void,
) => {
  const componentId = useComponentId();

  useEffect(() => {
    const listener = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        callback(buttonId);
      },
    );
    return () => listener.remove();
  }, [callback, componentId]);
};
