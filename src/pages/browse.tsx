import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';

const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');

    console.log(series);
    console.log(films);

    return <BrowseContainer />;
};

export default Browse;
