import { useContext } from 'react';
import { context } from '@containers/AppProvider';

export const useGlobalContext = () => useContext(context);
