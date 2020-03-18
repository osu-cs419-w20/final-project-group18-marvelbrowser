import React, { useState, useEffect } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import AllCharacters from '../components/AllCharacters';
import Character from '../components/Character';

import { getApiRequestUrl, parseCharactersList } from '../ApiHelper';

function Characters() {
    const { id } = useParams();
    const { path } = useRouteMatch();

    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ doFetch, setDoFetch ] = useState(true);

    useEffect(() => {
        if (doFetch) {
            // let ignore = false;
            const controller = new AbortController();

            async function fetchCharacters() {
                let responseBody = {***REMOVED***
                setLoading(true);

                try {
                    const url = getApiRequestUrl("/characters");
                    console.log(`making request: ${url}`);
                    const response = await fetch(
                        url
                    );
                    responseBody = await response.json();
                } catch (e) {
                    if (e instanceof DOMException) {
                        console.log("request aborted");
                        console.log(e);
                    } else {
                        setError(true);
                        console.log(e);
                    }
                }

                // if (!ignore) {
                    setError(false);
                    setLoading(false);
                    setCharacters(parseCharactersList(responseBody));
                // } else {
                //     console.log("ignoring");
                // }
            }

            fetchCharacters();
            setDoFetch(false);
            return () => {
                controller.abort();
                // ignore = true;
            ***REMOVED***
        }
    }, [ doFetch ]);

    if (id) {
        // render a single character
    } else {
        // render the list
        return (
			<Switch>
				<Route exact path={`${path}`}>
					<h1>Please select a character</h1>
                    <br />
                    {loading && <div>Fetching data...<br /></div>}
                    {error && <div>ERROR!<br /></div>}
                    <AllCharacters characters={characters} />
				</Route>
				<Route path={`${path}/:id`}>
					<Character />
				</Route>
			</Switch>
		);
    }
}

export default Characters;