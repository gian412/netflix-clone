import React, { Children } from 'react';

import { Container, Title, Subtitle } from './styles/feature';

interface Props {
    children?: React.ReactNode;
}

const Feature = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

Feature.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Feature.Subtitle = ({ children, ...restProps }: Props) => {
    return <Subtitle {...restProps}>{children}</Subtitle>;
};

export default Feature;
