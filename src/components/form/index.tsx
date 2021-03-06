import React from 'react';

import { Container, Base, Title, Text, TextSmall, Link, Input, Submit, Error } from './styles/form';

interface Props {
    children?: React.ReactNode;
}

interface LinkProps {
    to: string;
    children?: React.ReactNode;
}

interface BaseProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    method: string;
    children?: React.ReactNode;
}

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    name?: string;
    autoComplete?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

interface SubmitProps {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    children?: React.ReactNode;
}

const Form = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

Form.Base = ({ onSubmit, method, children, ...restProps }: BaseProps) => {
    return (
        <Base onSubmit={onSubmit} method={method} {...restProps}>
            {children}
        </Base>
    );
};

Form.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...restProps }: Props) => {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = ({ to, children, ...restProps }: LinkProps) => {
    return (
        <Link to={to} {...restProps}>
            {children}
        </Link>
    );
};

Form.Input = ({ children, ...restProps }: InputProps) => {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = ({ children, ...restProps }: SubmitProps) => {
    return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = ({ children, ...restProps }: Props) => {
    return <Error {...restProps}>{children}</Error>;
};

export default Form;
