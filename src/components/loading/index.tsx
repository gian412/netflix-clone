import React from 'react';
import { Picture } from '../header/styles/header';

import { Spinner, LockBody, ReleaseBody } from './styles/loading';

interface Props {
    src: string;
}

const Loading = ({ src, ...restProps }: Props) => {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    );
};

Loading.ReleaseBody = ({ ...restProps }) => {
    return <ReleaseBody {...restProps} />;
};

export default Loading;
