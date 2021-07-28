import React, { useState } from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

interface Profile {
    displayName?: string;
    photoURL?: string;
}

export const BrowseContainer = () => {
    const [profile, setProfile] = useState<Profile>({});

    const user = {
        displayName: 'Karl',
        photoURL: '1',
    };

    return profile.displayName ? (
        <>
            <p>Browse Container</p>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
};
