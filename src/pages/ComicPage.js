import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import Comic from '../components/Comic';

import { getApiRequestUrl, parseComic, parseCharactersList } from '../ApiHelper';

function ComicPage() {
    const { id } = useParams();

    const [ info, setInfo ] = useState({});
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ doFetch, setDoFetch ] = useState(true);

    useEffect(() => {
        if (doFetch) {
            const controller = new AbortController();

            async function fetchInfo() {
                let responseBody = {};
                setLoading(true);

                try {
                    const url = getApiRequestUrl(`/comics/${id}`);
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

                setInfo(parseComic(responseBody));
            }
            
            async function fetchCharacterList() {
                let responseBody = {};
                setLoading(true);

                try {
                    const url = getApiRequestUrl(`/comics/${id}/characters`);
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

            fetchInfo();
            fetchCharacterList();
            setDoFetch(false);
            return () => {
                controller.abort();
            };
        }
    }, [ doFetch, id ]);

    return (
        <div>
            {loading && <div>Fetching data...<br /></div>}
            {error && <div>ERROR!<br /></div>}
            <Comic info={info} characters={characters} />
        </div>
    )
}

export default ComicPage;