import React, { useState } from 'react';

import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

const SignIn = () => {
    const [error, setError] = useState('');
    const [credential, setCredential] = useState({ email: '', password: '' });

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        // TODO: Call firebase to authenticate the user. If there is an error, populate the error stateS
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredential((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input placeholder="Email address" value={credential.email} onChange={handleInput} />
                    <Form.Input
                        type="password"
                        value={credential.password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={handleInput}
                    />
                    <Form.Submit disabled={false} type="submit">
                        Sign In
                    </Form.Submit>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
    );
};

export default SignIn;
