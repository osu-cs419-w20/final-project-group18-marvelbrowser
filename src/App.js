import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Characters from './pages/Characters'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/characters">
                    <Characters />
                </Route>
                <Route exact path="/">
                    <a href="/characters">Characters</a>
                </Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
