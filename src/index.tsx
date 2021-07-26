import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './global-style';
import App from './app';
import { FirebaseContext } from './context/firebase';

interface Window {
    firebase: any;
}

const config = {
    apiKey: 'AIzaSyCodZlExiluGkW-Y_GkRvnm8ipjq1MNIaw',
    authDomain: 'netflix-clone-45806.firebaseapp.com',
    databaseURL: 'https://netflix-clone-45806-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'netflix-clone-45806',
    storageBucket: 'netflix-clone-45806.appspot.com',
    messagingSenderId: '691035459410',
    appId: '1:691035459410:web:b8e74ef83de8baa246348b',
};

declare var window: Window;
const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
