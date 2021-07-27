import React, { useState, useContext, createContext, SetStateAction, Dispatch } from 'react';
import { Container, Inner, Item, Title, Header, Body, Frame } from './styles/accordion';

interface Props {
    children?: React.ReactNode;
}

interface ToggleShowInterface {
    toggleShow?: boolean;
    setToggleShow?: Dispatch<SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleShowInterface>({});

const Accordion = ({ children, ...restProps }: Props) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Accordion.Frame = ({ children, ...restPorops }: Props) => {
    return <Frame {...restPorops}>{children}</Frame>;
};

Accordion.Item = ({ children, ...restPorops }: Props) => {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restPorops}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = ({ children, ...restProps }: Props) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header {...restProps} onClick={() => setToggleShow!(!toggleShow)}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    );
};

Accordion.Body = ({ children, ...restProps }: Props) => {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
