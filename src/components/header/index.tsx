import React, { Children } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink } from './styles/header';

interface Props {
    bg?: boolean;
    children?: React.ReactNode;
}

interface AttributesProps {
    children?: React.ReactNode;
}

interface LogoProps {
    to: string;
    src: string;
    alt: string;
}

interface ButtonProps {
    to: string;
    children?: React.ReactNode;
}

const Header = ({ bg = true, children, ...restProps }: Props) => {
    return bg ? <Background {...restProps}>{children}</Background> : <>children</>;
};

Header.Frame = ({ children, ...restProps }: AttributesProps) => {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = ({ to, src, alt, ...restProps }: LogoProps) => {
    return (
        <ReachRouterLink to={to}>
            <Logo src={src} alt={alt} {...restProps} />
        </ReachRouterLink>
    );
};

Header.ButtonLink = ({ to, children, ...restProps }: ButtonProps) => {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    );
};

export default Header;
