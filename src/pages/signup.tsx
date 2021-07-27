import React, { useState } from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const Signup = () => {
    const [credential, setCredential] = useState({
        firstName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const isInvalid = credential.firstName === '' || credential.email === '' || credential.password === '';

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredential((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Call firebase to register the user. If there is an error, populate the error state
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={credential.firstName}
                            onChange={handleInput}
                        />
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
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default Signup;
