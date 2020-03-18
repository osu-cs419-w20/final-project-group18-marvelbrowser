import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import App from './App';

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
        margin: 0;
        font-family: 'Muli', sans-serif;
    }
`;

ReactDOM.render(
    <BrowserRouter>
        <Global styles={globalStyles} />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
