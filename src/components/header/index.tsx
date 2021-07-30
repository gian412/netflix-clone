import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import {
    Background,
    Container,
    Feature,
    FeatureCallOut,
    Group,
    Text,
    Link,
    Logo,
    ButtonLink,
    PlayButton,
    Search,
    SearchInput,
    SearchIcon,
    Profile,
    Dropdown,
    Picture,
} from './styles/header';

interface Props {
    bg?: boolean;
    src?: string;
    dontShowOnSmallWiewport?: boolean;
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
interface PictureProps {
    src: string;
}
interface LinkProps {
    active: 'true' | 'false';
    onClick?: () => void;
    children?: React.ReactNode;
}
interface ButtonProps {
    to: string;
    children?: React.ReactNode;
}
interface SearchProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ bg = true, children, ...restProps }: Props) => {
    return bg ? <Background {...restProps}>{children}</Background> : <>{children}</>;
};

Header.Frame = ({ children, ...restProps }: AttributesProps) => {
    return <Container {...restProps}>{children}</Container>;
};

Header.Feature = ({ children, ...restProps }: AttributesProps) => {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = ({ children, ...restProps }: AttributesProps) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = ({ children, ...restProps }: AttributesProps) => {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Group = ({ children, ...restProps }: AttributesProps) => {
    return <Group {...restProps}>{children}</Group>;
};

Header.Search = ({ searchTerm, setSearchTerm, ...restProps }: SearchProps) => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeHolder="Search files and series"
                active={searchActive}
            />
        </Search>
    );
};

Header.Logo = ({ to, src, alt, ...restProps }: LogoProps) => {
    return (
        <ReachRouterLink to={to}>
            <Logo src={src} alt={alt} {...restProps} />
        </ReachRouterLink>
    );
};

Header.Text = ({ children, ...restProps }: AttributesProps) => {
    return <Text {...restProps}>{children}</Text>;
};

Header.Link = ({ children, ...restProps }: LinkProps) => {
    return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = ({ to, children, ...restProps }: ButtonProps) => {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    );
};

Header.Profile = ({ children, ...restProps }: AttributesProps) => {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = ({ children, ...restProps }: AttributesProps) => {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = ({ src, ...restProps }: PictureProps) => {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

export default Header;
