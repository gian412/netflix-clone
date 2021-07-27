import React from 'react';
import { Item, Inner, Container, Title, SubTitle, Image, Pane } from './styles/jumbotron';

interface Props {
    children?: React.ReactNode;
    direction: string;
}
interface JumbotronProps {
    children?: React.ReactNode;
}

interface JumbotronImageProps {
    src: string;
    alt: string;
}

const Jumbotron = ({ children, direction, ...restProps }: Props) => {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
};

Jumbotron.Container = ({ children, ...restProps }: JumbotronProps) => {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = ({ children, ...restProps }: JumbotronProps) => {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }: JumbotronProps) => {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = ({ ...restProps }: JumbotronImageProps) => {
    return <Image {...restProps} />;
};

Jumbotron.Pane = ({ children, ...restProps }: JumbotronProps) => {
    return <Pane {...restProps}>{children}</Pane>;
};

export default Jumbotron;
