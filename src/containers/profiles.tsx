import React, { useState } from 'react';

import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

interface Profile {
    displayName?: string;
    photoURL?: string;
}
interface Props {
    user: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export const SelectProfileContainer = ({ user, setProfile }: Props) => {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() =>
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            })
                        }
                    >
                        <Profiles.Picture src={user.photoURL} alt={`${user.displayName}'s picture`} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
};
