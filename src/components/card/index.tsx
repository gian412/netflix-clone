import React, { useState, useContext, createContext } from 'react';
import { Content as ContentType } from '../../types';
import {
    Group,
    Container,
    Title,
    Entities,
    Item,
    Image,
    Meta,
    SubTitle,
    Text,
    Content,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
} from './styles/card';

interface Props {
    children: React.ReactNode;
}
interface ItemProps {
    item: ContentType;
    children: React.ReactNode;
}
interface FeatureProps {
    category: string;
    children: React.ReactNode;
}
interface ImageProps {
    src: string;
}
interface FeatureContext {
    showFeature?: boolean;
    setShowFeature?: React.Dispatch<React.SetStateAction<boolean>>;
    itemFeature?: ContentType | null;
    setItemFeature?: React.Dispatch<React.SetStateAction<ContentType | undefined>>;
}

const FeatureContext = createContext<FeatureContext>({});

const Card = ({ children, ...restProps }: Props) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState<ContentType | undefined>(undefined);
    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
};

Card.Group = ({ children, ...restProps }: Props) => {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};

Card.Entities = ({ children, ...restProps }: Props) => {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Image = ({ src, ...restProps }: ImageProps) => {
    return <Image {...restProps} src={src} />;
};

Card.Meta = ({ children, ...restProps }: Props) => {
    return <Meta {...restProps}>{children}</Meta>;
};

Card.Subtitle = ({ children, ...restProps }: Props) => {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children}</Text>;
};

Card.Item = ({ item, children, ...restProps }: ItemProps) => {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);
    return (
        <Item
            {...restProps}
            onClick={() => {
                if (setItemFeature && setShowFeature) {
                    setItemFeature(item);
                    setShowFeature(true);
                }
            }}
        >
            {children}
        </Item>
    );
};

Card.Feature = ({ category, children, ...restProps }: FeatureProps) => {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature && itemFeature && setShowFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
};
export default Card;
