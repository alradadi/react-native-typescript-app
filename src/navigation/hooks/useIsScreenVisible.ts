import { useContext } from 'react';

import { NavContext } from '@/src/navigation/providers/NavProvider';

export const useIsScreenVisible = () => {
  const { isVisible } = useContext(NavContext);
  return isVisible;
};
