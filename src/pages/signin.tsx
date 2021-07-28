import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

const SignIn = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [credential, setCredential] = useState({ email: '', password: '' });

    const isInvalid = credential.email === '' || credential.password === '';

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(credential.email, credential.password)
            .then(() => {
                setCredential({ email: '', password: '' });
                setError('');
                history.push(ROUTES.BROWSE);
            })
            .catch((error: any) => setError(error.message));
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredential((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={credential.email}
                            onChange={handleInput}
                        />
                        <Form.Input
                            type="password"
                            name="password"
                            value={credential.password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={handleInput}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default SignIn;
