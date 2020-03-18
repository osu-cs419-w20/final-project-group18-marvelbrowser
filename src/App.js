import React from 'react';

import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled/macro';

import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharactersPage from './pages/CharacterPage';
import News from './pages/News';
import Comics from './pages/Comics';
import ComicPage from './pages/ComicPage';
import Search from './pages/Search';

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
                    <Route exact path="/characters"><Characters /></Route>
                    <Route path="/characters/:id"><CharactersPage /></Route>
                    <Route exact path="/comics"><Comics /></Route>
                    <Route path="/comics/:id"><ComicPage /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/search"><Search /></Route>
                    {/* <Route exact path="/news/:id"><News /></Route> */}
                    {/* <Route exact path="/news/:id"><News {...this.props}/></Route> */}
                    {/* <Route exact path="/news/:id" render={(props)=>{<News id={props.match.params.id}/>}}></Route> */}

                    

                    {/*-------------------------------------------------------
                    NEWS
                    -------------------------------------------------------*/}
                    <Route exact path="/news">
                        <News int="-1" />
                    </Route>
                    <Route exact path="/news/1">
                        <News int="0" />
                    </Route>
                    <Route exact path="/news/2">
                        <News int="1" />
                    </Route>
                    <Route exact path="/news/3">
                        <News int="2" />
                    </Route>
                    <Route exact path="/news/4">
                        <News int="3" />
                    </Route>
                    <Route exact path="/news/5">
                        <News int="4" />
                    </Route>
                    <Route exact path="/news/6">
                        <News int="5" />
                    </Route>
                    <Route exact path="/news/7">
                        <News int="6" />
                    </Route>
                    <Route exact path="/news/8">
                        <News int="7" />
                    </Route>
                    <Route exact path="/news/9">
                        <News int="8" />
                    </Route>
                    
                </Switch>
            </Main>
        </div>
    );
}

export default App;
