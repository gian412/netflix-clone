import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, SignIn } from './pages';
import Signup from './pages/signup';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <SignIn />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <p>I will be the browse page</p>
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
