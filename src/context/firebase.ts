import Firebase from 'firebase';
import { createContext } from 'react';

interface Props {
    firebase?: Firebase.app.App;
}

export const FirebaseContext = createContext<Props>({});
