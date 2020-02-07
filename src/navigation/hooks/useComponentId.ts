import { useContext } from 'react';

import { NavContext } from '@/src/navigation/providers/NavProvider';

export const useComponentId = () => {
  const { componentId } = useContext(NavContext);
  return componentId;
};
