import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import AllComics from '../components/AllComics';

import { getApiRequestUrl, parseComicsList } from '../ApiHelper';

function Comics() {
    const [ comics, setComics ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ doFetch, setDoFetch ] = useState(true);

    useEffect(() => {
        if (doFetch) {
            const controller = new AbortController();

            async function fetchCharacters() {
                let responseBody = {***REMOVED***
                setLoading(true);

                try {
                    var url = getApiRequestUrl("/comics");
                    url += "&format=comic&formatType=comic&noVariants=true&dateDescriptor=lastWeek";
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
                setComics(parseComicsList(responseBody));
            }

            fetchCharacters();
            setDoFetch(false);
            return () => {
                controller.abort();
            ***REMOVED***
        }
    }, [ doFetch ]);

    return (
        <div>
            <h1>Please select a comic</h1>
            <br />
            {loading && <div>Fetching data...<br /></div>}
            {error && <div>ERROR!<br /></div>}
            <AllComics comics={comics} />
        </div>
    );
}

export default Comics;