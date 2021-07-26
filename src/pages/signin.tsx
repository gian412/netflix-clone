import React, { useState } from 'react';

import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

const SignIn = () => {
    const [error, setError] = useState('');

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        // TODO: Call firebase to authenticate the user. If there is an error, populate the error stateS
    };

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                </Form.Base>
            </Form>
        </HeaderContainer>
    );
};

export default SignIn;
