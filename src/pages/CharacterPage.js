import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import Character from '../components/Character';

import { getApiRequestUrl, parseCharacter, parseCharacterComicsList } from '../ApiHelper';

function CharacterPage() {
    const { id } = useParams();

    const [ info, setInfo ] = useState({});
    const [ comics, setComics ] = useState([]);
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
                    const url = getApiRequestUrl(`/characters/${id}`);
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
                setInfo(parseCharacter(responseBody));
            }
            
            async function fetchComicList() {
                let responseBody = {};
                setLoading(true);

                try {
                    const url = getApiRequestUrl(`/characters/${id}/comics`);
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
                setComics(parseCharacterComicsList(responseBody));
            }

            fetchInfo();
            fetchComicList();
            setDoFetch(false);
            return () => {
                controller.abort();
            };
        }
    }, [ doFetch, id ]);

    return (
        <div>
            {loading && <div>Fetching data...</div>}
            {error && <div>ERROR!</div>}
            <Character info={info} comics={comics} />
        </div>
    )
}

export default CharacterPage;