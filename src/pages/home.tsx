import React from 'react';

import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptInForm } from '../components';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
                    <OptInForm>
                        <OptInForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptInForm.Text>
                        <OptInForm.Input placeholder="Email Address" />
                        <OptInForm.Button>Try it now</OptInForm.Button>
                        <OptInForm.Break />
                    </OptInForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
