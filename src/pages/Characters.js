import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import AllCharacters from '../components/AllCharacters';

import { getApiRequestUrl, parseCharactersList } from '../ApiHelper';

function Characters(props) {
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ doFetch, setDoFetch ] = useState(true);

    useEffect(() => {
        if (doFetch) {
            const controller = new AbortController();

            async function fetchCharacters() {
                let responseBody = {};
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

                setError(false);
                setLoading(false);
                setCharacters(parseCharactersList(responseBody));
            }

            fetchCharacters();
            setDoFetch(false);
            return () => {
                controller.abort();
            };
        }
    }, [ doFetch ]);

    return (
        <div>
            <h1>Please select a character</h1>
            <br />
            {loading && <div>Fetching data...<br /></div>}
            {error && <div>ERROR!<br /></div>}
            <AllCharacters characters={characters} />
        </div>
    );
}

export default Characters;