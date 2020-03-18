import React from 'react';

import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled/macro';

import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Characters from './pages/Characters';
import News from './pages/News';

function App() {
    const Main = styled.main`
        margin-left: 15px;
    `;

    return (
        <div>
            <Navbar />
            <Main>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/news"><News /></Route>
                    <Route path="/characters"><Characters /></Route>
                    <Route path="/about"><About /></Route>
                    
                </Switch>
            </Main>
        </div>
    );
}

export default App;
