import React from 'react';
import { Container, Row, Column, Link, Break, Title, Text } from './styles/footer';

interface Props {
    children: React.ReactNode;
}

interface LinkProps {
    children: React.ReactNode;
    href: string;
}

const Footer = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

Footer.Row = ({ children, ...restProps }: Props) => {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = ({ children, ...restProps }: Props) => {
    return <Column {...restProps}>{children}</Column>;
};

Footer.Link = ({ children, ...restProps }: LinkProps) => {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ ...restProps }) => {
    return <Break {...restProps} />;
};

export default Footer;
