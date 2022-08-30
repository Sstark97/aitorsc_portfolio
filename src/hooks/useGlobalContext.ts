import { useContext } from 'react';
import { context } from '@context/context';

export const useGlobalContext = () => useContext(context);
