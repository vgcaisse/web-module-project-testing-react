import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';


const episodeTest = {
    id: 1,
    name: '',
    image: 'https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg',
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1,
}

const imageNullTest = {
    id: 1,
    name: '',
    image: null,
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1,
}

test("renders without error", () => { 
    render(<Episode episode={episodeTest}/>);
});

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={episodeTest}/>);
    const summary = screen.queryByText(/test summary/i);

    expect(summary).toHaveTextContent('test summary');
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
});

test("renders default image when image is not defined", () => { 
    render(<Episode episode={imageNullTest}/>);
    const image = screen.queryAllByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(image).toBeInTheDocument();
});
