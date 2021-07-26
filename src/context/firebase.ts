import { createContext } from 'react';

interface Props {
    firebase?: any;
}

export const FirebaseContext = createContext<Props>({});
