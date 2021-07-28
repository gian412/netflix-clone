import React from 'react';

import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

interface Props {
    children: React.ReactNode;
}
interface UserProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}
interface ImgProps {
    src?: string;
    alt: string;
}

const Profiles = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }: Props) => {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = ({ children, ...restProps }: UserProps) => {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = ({ src, ...restProps }: ImgProps) => {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = ({ children, ...restProps }: Props) => {
    return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
