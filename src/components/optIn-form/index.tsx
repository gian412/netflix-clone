import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/optIn-form';

interface Props {
    children: React.ReactNode;
}

const OptInForm = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

OptInForm.Input = ({ ...restProps }) => {
    return <Input {...restProps} />;
};

OptInForm.Button = ({ children, ...restProps }: Props) => {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

OptInForm.Break = ({ ...restProps }) => {
    return <Break {...restProps} />;
};

OptInForm.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children} </Text>;
};

export default OptInForm;
