import React from 'react';
import { Item, Inner, Container } from './styles/jumbotron';

type Props = {
    children: React.ReactNode;
    direction: 'string';
};
type ContaierProps = {
    children: React.ReactNode;
};

const Jumbotron = ({ children, direction, ...restProps }: Props) => {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
};

Jumbotron.Container = ({ children, ...restProps }: ContaierProps) => {
    return <Container {...restProps}>{children}</Container>;
};

export default Jumbotron;
